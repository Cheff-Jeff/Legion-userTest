import { TypeScriptTransformer } from "./helpers/TypeScriptTransformer";
import type { BlockScript } from "~/types/blockSourceInfo";
import type { DirSourceInfo, FileSourceInfo } from "~/types/bitbucket";

/**
 *
 * @description This class is responsible for collecting and transforming scripts from a given repository.
 * It fetches the script files from the Bitbucket API, transforms them using TypeScriptTransformer,
 * and returns the transformed code.
 *
 * @param {string} repoSlug - The slug of the repository to fetch data from.
 */
export class ScriptCollector {
  private repoSlug: string;
  private TypeScriptTransformer: TypeScriptTransformer;
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

  constructor(repoSlug: string) {
    this.repoSlug = repoSlug;
    this.TypeScriptTransformer = new TypeScriptTransformer();
  }

  /**
   * @description This method fetches the block scripts from the repository and transforms them using TypeScriptTransformer.
   * It checks if the script is available in the source directory first, and if not, it fetches it from the root script.
   *
   * @param {string} shortName - The short name of the core block to fetch the script for.
   * @returns {Promise<BlockScript | null>} - A promise that resolves to the transformed block script or null if an error occurs.
   */
  public async getBlockScripts(shortName: string): Promise<BlockScript | null> {
    try {
      const scriptFromSource = await this.checkSourceDir(shortName);

      if (scriptFromSource !== null && scriptFromSource.text) {
        const translatedCode = await this.TypeScriptTransformer.transform(
          scriptFromSource.text
        );

        return {
          scriptUrl: scriptFromSource.scriptLocation,
          translatedCode,
          scriptName: "",
        } as BlockScript;
      }

      const rootScript = await this.getRootBlockScript();
      if (!rootScript) return null;

      const scriptName = await this.getScriptName(rootScript, shortName);

      if (!scriptName) return null;

      const blockScript = await this.getBlockScriptByName(scriptName);
      if (blockScript.status !== 200) {
        console.error("Failed to fetch block script:", blockScript.status);
        return null;
      }

      const translatedCode = await this.TypeScriptTransformer.transform(
        blockScript.text
      );

      return {
        scriptUrl: blockScript.scriptLocation,
        translatedCode,
        scriptName: scriptName,
      } as BlockScript;
    } catch (error) {
      console.error("Error fetching block scripts:", error);
      return null;
    }
  }

  /**
   * @description This method fetches the core scripts from the repository and transforms them using TypeScriptTransformer.
   * It fetches the script file from the Bitbucket API and returns the transformed code.
   *
   * @returns {Promise<string | null>} - A promise that resolves to the transformed core script or null if an error occurs.
   */
  public async getCoreScripts() {
    try {
      const scriptJson = await fetch(
        `https://${this.repoSlug}.lyfter.app/app/themes/lyfter/dist/assets/script-CAHswMm-.js`,
        {
          headers: {
            Authorization: `Basic ${btoa(
              `${this.config.LyfterUser}:${this.config.LyfterPassword}`
            )}`,
          },
        }
      );
      const scriptText = await scriptJson.text();

      if (!scriptText) return null;

      return scriptText
        .replace(
          /import\("\.\/(.+?)-[a-zA-Z0-9]+\.js"\)/g,
          'import("http://localhost:3000/utils/$1.js")'
        )
        .replace("-Dh007", "") as string;
    } catch (error: any) {
      console.error(
        `[renderBlocks] unable to get coreScript: ${error.message}`
      );

      return null;
    }
  }

  /**
   * @description This method fetches the block script by its name from the Bitbucket API.
   * It returns the status and text of the fetched script.
   *
   * @param {string} scriptName - The name of the script to fetch.
   * @returns {Promise<{ status: number; text: string }>} - A promise that resolves to the status and text of the fetched script.
   */
  private async getBlockScriptByName(scriptName: string) {
    const scriptLocation = `/${this.repoSlug}/src/master/web/app/themes/lyfter-child/ts/${scriptName}.ts`;

    const script = await fetch(
      `${this.config.bitBucketBaseUrl}${scriptLocation}`,
      this.bitBucketApiHeaders
    );

    if (script.status !== 200) {
      console.error("Failed to fetch script:", script.statusText);
    }

    return {
      scriptLocation: `${this.config.bitBucket}${scriptLocation}`,
      status: script.status,
      text: await script.text(),
    };
  }

  /**
   * @description This method extracts the script name from the root script based on the block name.
   * It uses a regular expression to match the block name in the root script and returns the corresponding script name.
   *
   * @param {string} rootScript - The root script to search for the block name.
   * @param {string} blockName - The block name to search for in the root script.
   * @returns {Promise<string>} - A promise that resolves to the script name if found, or throws an error if not found.
   */
  private async getScriptName(rootScript: string, blockName: string) {
    const scriptWords = rootScript.match(/(\b[^\s]+\b)/g);
    let scriptName = "";

    scriptWords?.some((word) => {
      if (word.includes(blockName)) {
        scriptName = word;
        return true; // exit the loop
      }
    });

    if (scriptName === "") {
      console.error(`Block name "${blockName}" not found in script.`);
      return null;
    }

    return scriptName;
  }

  /**
   * @description This method fetches the root block script from the Bitbucket API.
   * It checks if the main TypeScript file is available, and if not, it fetches the root script TypeScript file.
   * It returns the text of the fetched script.
   *
   * @returns {Promise<string | null>} - A promise that resolves to the text of the fetched script or null if an error occurs.
   */
  private async getRootBlockScript() {
    try {
      let jsRootFile = null;

      const mainTsFile = await this.getMainTsFile();

      if (mainTsFile.status !== 200) {
        const rootTsFile = await this.getRootScriptTsFile();

        if (rootTsFile.status !== 200) {
          throw new Error("Failed to fetch js file.");
        }

        jsRootFile = rootTsFile.text;
      } else {
        jsRootFile = mainTsFile.text;
      }

      return jsRootFile;
    } catch (error: any) {
      console.warn(
        `[TypeScript /parse] ERROR getting main Typescript: ${error.message}`
      );
      return null;
    }
  }

  /**
   * @description This method fetches the main TypeScript file from the Bitbucket API.
   * It returns the status and text of the fetched file.
   *
   * @returns {Promise<{ status: number; text: string }>} - A promise that resolves to the status and text of the fetched file.
   */
  private async getMainTsFile() {
    const mainTS = await fetch(
      `${this.config.bitBucketBaseUrl}/${this.repoSlug}/src/master/web/app/themes/lyfter-child/ts/main.ts`,
      this.bitBucketApiHeaders
    );

    return {
      status: mainTS.status,
      text: await mainTS.text(),
    };
  }

  /**
   * @description This method fetches the root script TypeScript file from the Bitbucket API.
   * It returns the status and text of the fetched file.
   *
   * @returns {Promise<{ status: number; text: string }>} - A promise that resolves to the status and text of the fetched file.
   */
  private async getRootScriptTsFile() {
    const scriptTS = await fetch(
      `${this.config.bitBucketBaseUrl}/${this.repoSlug}/src/master/web/app/themes/lyfter-child/ts/script.ts`,
      this.bitBucketApiHeaders
    );

    return {
      status: scriptTS.status,
      text: await scriptTS.text(),
    };
  }

  /**
   * @description This method checks if the block script exists in the source directory. and fetches it if available.
   *
   * @param {string} blockShortName - The short name of the block to check for in the source directory.
   * @returns {Promise<string | null>} - A promise that resolves to the script, or null if not found.
   */
  private async checkSourceDir(blockShortName: string) {
    const blockDir = await fetch(
      `${this.config.bitBucketBaseUrl}/${this.repoSlug}/src/master/web/app/themes/lyfter-child/php/Blocks/${blockShortName}`,
      this.bitBucketApiHeaders
    );

    if (blockDir.status !== 200) return null;

    const files = JSON.parse(await blockDir.text()) as DirSourceInfo;
    let scriptLocation = "";

    files.values.some((file: FileSourceInfo) => {
      if (file.path.includes(".ts")) {
        scriptLocation = file.path;
        return true; // exit the loop
      }
    });

    if (scriptLocation === "") return null;

    const blockScript = await fetch(
      `${this.config.bitBucketBaseUrl}/${this.repoSlug}/src/master/${scriptLocation}`,
      this.bitBucketApiHeaders
    );

    if (blockScript.status !== 200) return null;

    return {
      scriptLocation: `${this.config.bitBucket}/${this.repoSlug}/src/master/${scriptLocation}`,
      text: await blockScript.text(),
    };
  }
}
