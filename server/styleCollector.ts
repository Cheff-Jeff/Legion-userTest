import { parseDocument } from "htmlparser2";
import { Element } from "domhandler";
import { selectAll } from "css-select";
import type { DirSourceInfo, FileSourceInfo } from "~/types/bitbucket";
import type { RenderedBlock } from "~/types/blockSourceInfo";

/**
 *
 * TODO: Needs better solution for retrieving stylesheets from block. - Now it does not work with Gutenberg blocks on other pages than home.
 *
 * @description This class is responsible for collecting and purging styles from a given repository.
 * It fetches the stylesheets from the sites HTML page and purges them using PurgeCSS.
 * It also extracts font information from the stylesheets.
 *
 */
export class StyleCollector {
  private repoSlug: string;
  private blocks: RenderedBlock[];
  private config = useRuntimeConfig();
  private bitBucketApiHeaders = {
    method: "GET",
    headers: {
      Authorization: `Basic ${btoa(
        `${this.config.bitBucketApiUser}:${this.config.bitBucketApiKey}`
      )}`,
      Accept: "application/json;charset=UTF-8",
    },
  };

  constructor(repoSlug: string, blocks: RenderedBlock[]) {
    this.repoSlug = repoSlug;
    this.blocks = blocks;
  }

  /**
   * @description This method fetches the styles from the repository and purges them using PurgeCSS.
   * It returns an array of objects containing the block, the purged CSS, and the font information.
   * If an error occurs, it logs the error message and returns null.
   *
   * @returns {Promise<{block: RenderedBlock; css: string; styleLocation: string | null; fonts: { headingFont: string | null; bodyFont: string | null; }; }[] | null>} -
   * A promise that resolves to an array of objects containing the block, purged CSS, and font information.
   */
  public async getStyles() {
    try {
      const styles = await this.getStylesFromHTML();

      if (!styles) {
        throw new Error("Failed to fetch styles.");
      }

      return await this.purgeStyles(styles);
    } catch (error: any) {
      console.error("Error getting styles:", error.message);
    }
  }

  /**
   * @description This method fetches the stylesheets from the HTML page of the repository.
   * It uses the website to retrieve the page and extracts the stylesheets from it.
   * If an error occurs, it logs the error message and returns null.
   *
   * @returns {Promise<string[] | null>} - A promise that resolves to an array of stylesheets or null if an error occurs.
   */
  private async getStylesFromHTML() {
    try {
      const pewHtml = await fetch(`https://${this.repoSlug}.lyfter.app`, {
        method: "GET",
        headers: {
          Authorization: `Basic ${btoa(
            `${this.config.LyfterUser}:${this.config.LyfterPassword}`
          )}`,
        },
      });

      if (pewHtml.status !== 200) {
        throw new Error("Failed to fetch page.");
      }

      const styles = await this.extractStyleSheets(await pewHtml.text());
      return styles;
    } catch (error: any) {
      console.error("Error fetching DOM page:", error.message);
    }
  }

  /**
   * @description This method extracts the stylesheets from the given DOM string.
   * It uses JSDOM to parse the DOM and extract the stylesheets.
   * If an error occurs, it logs the error message and returns null.
   *
   * @param {string} dom - The DOM string to extract stylesheets from.
   * @returns {Promise<string[]>} - A promise that resolves to an array of stylesheets.
   */
  private async extractStyleSheets(dom: string) {
    const document = parseDocument(dom);
    const nodes = selectAll(
      "link[rel='preload stylesheet']",
      document.children as Element[]
    );

    const hrefs = nodes.map((node) => node.attribs.href);

    const stylesheets: (string | null)[] = await Promise.all(
      hrefs.map(async (url) => {
        const response = await $fetch(url);

        if (!response) {
          console.error("Failed to fetch data:", response);
          return null;
        }

        return response as string;
      })
    );

    return stylesheets.filter((style): style is string => style !== null);
  }

  /**
   * @description This method extracts the font information from the given CSS string.
   * It uses regular expressions to find the font-family properties and returns them as an object.
   *
   * @param {string} css - The CSS string to extract fonts from.
   * @returns {{ headingFont: string | null; bodyFont: string | null; }} - An object containing the heading and body font information.
   */
  private extractFonts(css: string) {
    const headingMatch = css.match(/--heading-font-family:\s*"([^"]+)"/);
    const bodyMatch = css.match(/--body-font-family:\s*"([^"]+)"/);
    let headingFont = null;
    let bodyFont = null;

    if (headingMatch && headingMatch[1]) {
      headingFont = headingMatch[1].split(" ")[0].trim();
    }

    if (bodyMatch && bodyMatch[1]) {
      bodyFont = bodyMatch[1].split(" ")[0].trim();
    }

    return { headingFont, bodyFont };
  }

  /**
   * @description This method purges the stylesheets using PurgeCSS.
   * It uses the PurgeCSS library to remove unused CSS and returns the purged CSS along with font information.
   *
   * @param {string[]} stylesheets - The array of stylesheets to purge.
   * @returns {Promise<{block: RenderedBlock; css: string; styleLocation: string | null; fonts: { headingFont: string | null; bodyFont: string | null; }; }[]>} - A promise that resolves to an array of objects containing the block, purged CSS, and font information.
   */
  private async purgeStyles(stylesheets: string[]) {
    const PurgeCSS = await import("purgecss").then((module) => module.PurgeCSS);
    const purgeCSS = new PurgeCSS();

    return await Promise.all(
      this.blocks.map(async (block) => {
        const result = await purgeCSS.purge({
          content: [{ raw: block.html, extension: "html" }],
          css: stylesheets.map((style) => ({ raw: style })),
        });

        const css = result
          .map((r) => r.css)
          .join("\n")
          .replaceAll(":root", ":host");

        const fonts = this.extractFonts(css);
        const cssUrl = await this.getStyleLocation(block);

        return {
          block,
          css,
          cssUrl: `${this.config.bitBucket}/${this.repoSlug}/src/master/${cssUrl}`,
          fonts,
        };
      })
    );
  }

  private async getStyleLocation(block: RenderedBlock) {
    const blockDir = await fetch(
      `${this.config.bitBucketBaseUrl}/${this.repoSlug}/src/master/web/app/themes/lyfter-child/php/Blocks/${block.shortName}`,
      this.bitBucketApiHeaders
    );

    if (blockDir.status !== 200) {
      const secondTry = await this.trySecondStyleLocation(block);

      if (secondTry) {
        return secondTry;
      } else {
        return null;
      }
    }

    const files = JSON.parse(await blockDir.text()) as DirSourceInfo;
    let styleLocation = "";

    files.values.some((file: FileSourceInfo) => {
      if (file.path.includes(".scss")) {
        styleLocation = file.path;
        return true; // exit the loop
      }
    });

    if (styleLocation === "") {
      const secondTry = await this.trySecondStyleLocation(block);

      if (secondTry) {
        return secondTry;
      } else {
        return null;
      }
    } else {
      return styleLocation;
    }
  }

  private async trySecondStyleLocation(block: RenderedBlock) {
    const blockDir = await fetch(
      `${this.config.bitBucketBaseUrl}/${this.repoSlug}/src/master/web/app/themes/lyfter-child/sass/blocks`,
      this.bitBucketApiHeaders
    );

    if (blockDir.status !== 200) return null;

    const files = JSON.parse(await blockDir.text()) as DirSourceInfo;
    let styleLocation = "";
    const blockName = this.kebabize(block.shortName);

    files.values.some((file: FileSourceInfo) => {
      if (file.path.includes(`${blockName}.scss`)) {
        styleLocation = file.path;
        return true; // exit the loop
      }
    });

    if (styleLocation === "") {
      return null;
    } else {
      return styleLocation;
    }
  }

  // This method converts a camelCase string to kebab-case.
  private kebabize = (str: string) => {
    return str
      .split("")
      .map((letter, idx) => {
        return letter.toUpperCase() === letter
          ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
          : letter;
      })
      .join("");
  };
}
