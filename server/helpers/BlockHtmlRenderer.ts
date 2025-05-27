import type { blockSource, RenderedBlock } from "~/types/blockSourceInfo";

/**
 *
 * @description This class is responsible for rendering core blocks.
 *
 * @param {string} repoSlug - The slug of the repository to fetch data from.
 *
 */
export class BlockHtmlRenderer {
  private repoSlug: string;
  private config = useRuntimeConfig();
  constructor(repoSlug: string) {
    this.repoSlug = repoSlug;
  }

  /**
   * @description Renders core blocks by fetching faker data and rendering the blocks using the storybook API.
   *
   * @param {blockSource[]} sourcesArray - An array of block sources to render.
   *
   * @returns {Promise<RenderedBlock[]>} - A promise that resolves to an array of rendered blocks.
   *
   * TODO: Get Blocklocation from the block config file instead of hardcoding it.
   */
  public async renderCoreBlocks(sourcesArray: blockSource[]) {
    const coreBlocks = sourcesArray.filter(
      (block) => block.source === "Lyfter"
    );

    const blocks = await Promise.all(
      coreBlocks.map(async (block) => {
        const data = await this.getFakerData(block.shortName);

        if (!data) {
          console.error(
            `[renderBlocks] unable to get faker data for block ${block.shortName}`
          );
          return null;
        }

        const renderedBlock = await this.renderBlock(block.shortName, data);

        if (renderedBlock) {
          renderedBlock.blockLocation = `${this.config.bitBucket}/lyfter-core-theme/src/master/php/Blocks/Gutenberg/${block.shortName}/v1`;
        }

        return renderedBlock as RenderedBlock;
      })
    );

    return blocks.filter((block) => block !== null) as RenderedBlock[];
  }

  /**
   *
   * @description Fetches faker data for a given core block name from the storybook API.
   *
   * @param {string} blockName - The name of the block to fetch faker data for.
   *
   * @returns {Promise<{ data: string } | null>} - A promise that resolves to the fetched faker data or null if an error occurs.
   */
  private async getFakerData(blockName: string): Promise<{
    data: string;
  } | null> {
    try {
      const response = await fetch(
        `https://${this.repoSlug}.lyfter.app/wp-json/api/v1/core/storybook/component/data/${blockName}/default`,
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(
              `${this.config.LyfterUser}:${this.config.LyfterPassword}`
            )}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to fetch faker data.");
      }

      return (await response.json()) as { data: string };
    } catch (error: any) {
      console.error(
        `[renderBlocks] unable to get faker data: ${error.message}`
      );

      return null;
    }
  }

  /**
   *
   * @description Renders a block using the storybook API.
   *
   * @param {string} blockName - The name of the core block to render.
   * @param {{ data: string }} data - The data to use for rendering the block.
   *
   * @returns {Promise<RenderedBlock | null>} - A promise that resolves to the rendered block or null if an error occurs.
   */
  private async renderBlock(
    blockName: string,
    data: { data: string }
  ): Promise<RenderedBlock | null> {
    try {
      const response = await fetch(
        `https://${this.repoSlug}.lyfter.app/wp-json/api/v1/core/storybook/component/render/block/${blockName}`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(
              `${this.config.LyfterUser}:${this.config.LyfterPassword}`
            )}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            attributes: data.data,
            config: {},
            slot: "",
          }),
        }
      );

      if (response.status !== 200) {
        throw new Error(`Failed to render block ${blockName}.`);
      }

      const renderedBlock = await response.json();

      return {
        html: renderedBlock.html,
        shortName: blockName,
      } as RenderedBlock;
    } catch (error: any) {
      console.error(`[renderBlocks] unable to render block: ${error.message}`);

      return null;
    }
  }
}
