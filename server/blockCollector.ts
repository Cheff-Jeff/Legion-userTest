import type { BlockConfig, blockSource } from "~/types/blockSourceInfo";
import { BlockConfigTransformer } from "./helpers/BlockConfigTransformer";
import { BlockHtmlRenderer } from "./helpers/BlockHtmlRenderer";

/**
 *
 * @description This class is responsible for collecting and rendering blocks from a given repository.
 * It fetches the block configuration file, transforms it into a JavaScript object,
 * and renders the blocks using the BlockHtmlRenderer class.
 *
 */
export class BlockCollector {
  private config = useRuntimeConfig();
  private processedConfig: {
    blockConfig: BlockConfig;
    blockSources: blockSource[];
  } | null = null;

  /**
   *
   * @description
   * This method fetches the block configuration file from the specified repository,
   * transforms it into a JavaScript object using the BlockConfigTransformer class,
   * and renders the blocks using the BlockHtmlRenderer class.
   *
   * @param repoSlug - The slug of the repository to fetch data from.
   * @returns {Promise<RenderedBlock[]>} - A promise that resolves to an array of rendered blocks.
   * If an error occurs, it logs the error message and returns null.
   */
  public async getRenderedBlocks(repoSlug: string) {
    try {
      const blockConfig = await this.getBlockConfig(repoSlug);

      if (blockConfig === null) throw new Error("Block config is null");

      this.processedConfig = await new BlockConfigTransformer(
        blockConfig
      ).transformConfigFile();

      if (!this.processedConfig) throw new Error("Processed config is null");

      const blocks = await new BlockHtmlRenderer(repoSlug).renderCoreBlocks(
        this.processedConfig.blockSources
      );

      return blocks;
    } catch (error: any) {
      console.error("Error fetching block config:", error.message);
    }
  }

  /**
   *
   * @description
   * This method fetches the block configuration file from the specified repository.
   * It uses the Bitbucket API to retrieve the file and returns its content as a string.
   * If an error occurs, it logs the error message and returns null.
   *
   * @param repoSlug - The slug of the repository to fetch data from.
   * @returns {Promise<string | null>} - A promise that resolves to the block configuration file content as a string.
   */
  private async getBlockConfig(repoSlug: string): Promise<string | null> {
    try {
      const preBlockConfig = await fetch(
        `${this.config.bitBucketBaseUrl}/${repoSlug}/src/master/web/app/themes/lyfter-child/config/blocks.php`,
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(
              `${this.config.bitBucketApiUser}:${this.config.bitBucketApiKey}`
            )}`,
            Accept: "application/json;charset=UTF-8",
          },
        }
      );

      if (preBlockConfig.status !== 200) {
        throw new Error(
          `Failed to fetch block config: ${preBlockConfig.statusText}`
        );
      }

      return (await preBlockConfig.text()) as string;
    } catch (error: any) {
      console.error("Error fetching block config:", error.message);
      return null;
    }
  }
}
