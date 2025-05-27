import type { IFullBlock } from "~/types/blockSourceInfo";

/**
 *
 * @description This class is responsible for generating screenshots of blocks using Puppeteer.
 * It takes a block object and its ID as input, sets up the HTML content with the necessary styles and scripts,
 * and captures a screenshot of the rendered block.
 *
 * @param {IFullBlock} block - The block object containing the HTML, CSS, fonts, and script information.
 */
export class ScreenShotGenerator {
  private blockId: string;
  private html: string;
  private css: string;
  private fonts: {
    headingFont: string | null;
    bodyFont: string | null;
  };
  private script: string | null;
  private scriptName: string | null;

  constructor(block: IFullBlock, blockId: string) {
    this.blockId = blockId;
    this.html = block.block.html;
    this.css = block.css;
    this.fonts = {
      headingFont: block.fonts?.headingFont || null,
      bodyFont: block.fonts?.bodyFont || null,
    };
    this.script = block.script?.translatedCode || null;
    this.scriptName = block.script?.scriptName || null;
  }

  /**
   * @description Generates a screenshot of the block by launching Puppeteer, rendering the HTML content,
   * and capturing a screenshot of the rendered block in headless browser.
   *
   * @returns {Promise<void>} - A promise that resolves when the screenshot is generated.
   */
  public async generateScreenshot() {
    const puppeteer = await import("puppeteer");
    const browser = await puppeteer.launch({
      defaultViewport: null,
    });
    const page = await browser.newPage();

    await page.setContent(this.getHtmlContent());
    await page.setViewport({
      width: 2480,
      height: 0,
      deviceScaleFactor: 0,
      isMobile: false,
    });
    await page.screenshot({
      path: `./public/screenshots/${this.blockId}.png`,
      captureBeyondViewport: true,
      fullPage: true,
    });

    await browser.close();
  }

  /**
   *
   * @description Generates the HTML content for the screenshot.
   *
   * @returns {string} - The HTML content as a string.
   *
   */
  private getHtmlContent() {
    return `
        <html>
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            ${
              this.fonts.headingFont
                ? `<link href="https://fonts.googleapis.com/css2?family=${this.fonts.headingFont}&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=${this.fonts.headingFont}:wght@100..900&display=swap" rel="stylesheet">`
                : ``
            }
            
            ${
              this.fonts.bodyFont
                ? `<link href="https://fonts.googleapis.com/css2?family=${this.fonts.bodyFont}&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=${this.fonts.bodyFont}:wght@100..900&display=swap" rel="stylesheet">`
                : ``
            } 

            <style>
              ${this.css.replaceAll(":host", ":root")}
            </style>
          </head>

          <body>
            ${this.html}
          </body>

          ${
            this.script
              ? `<script type='module' defer>
                ${this.script} \n${
                  this.scriptName ? this.scriptName + ".init();" : ""
                }
              </script> `
              : ""
          }
        </html>
      `;
  }
}
