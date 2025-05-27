import type {
  BlockConfig,
  blockSource,
  BlockSourceInfo,
} from "~/types/blockSourceInfo";

/**
 *
 * @description This class is responsible for transforming a PHP configuration file into a JavaScript object.
 * It extracts the block configuration and block sources from the PHP code, processes any use statements,
 * and replaces class constants with their full namespace strings.
 *
 * @class BlockConfigTransformer
 * @param {string} configFile - The PHP block configuration file as a string.
 */
export class BlockConfigTransformer {
  private rawPHPConfigFile: string;
  private variables: string | null = null;
  private blockSourceMapping: Record<string, BlockSourceInfo> = {};
  private returnArrayMatch = /return\s*(\[.*?\];)/s;

  constructor(configFile: string) {
    try {
      const match = configFile.match(this.returnArrayMatch);

      if (!match || !match[1]) {
        throw new Error(
          'Could not find "return [...]" statement in config file.'
        );
      }

      this.rawPHPConfigFile = configFile;
    } catch (error: any) {
      this.rawPHPConfigFile = "";
      console.error("[PHP / blockConfig / transformer] Error:", error.message);
    }
  }

  /**
   * @description Transforms the raw PHP configuration file into a JavaScript object.
   * It extracts the block configuration and block sources from the PHP code.
   *
   * @returns {Promise<{ blockConfig: BlockConfig; blockSources: blockSource[] } | null>} -
   * A promise that resolves to an object containing the block configuration and block sources, or null if an error occurs.
   */
  public async transformConfigFile(): Promise<{
    blockConfig: BlockConfig;
    blockSources: blockSource[];
  } | null> {
    try {
      if (!this.rawPHPConfigFile || this.rawPHPConfigFile === "") {
        throw new Error("No valid PHP code to transform.");
      }

      // Check if the PHP code contains any variables
      if (/\$[a-zA-Z_][a-zA-Z0-9_]*/.test(this.rawPHPConfigFile)) {
        this.variables = this.extractPhpVariables();
      }

      const blockSources = this.createSourceArray(this.processUseStatements());

      const returnArray = this.extractReturnArray();

      if (!returnArray) {
        throw new Error('Could not find "return [...]" statement in PHP code.');
      }

      const processedBlockArray = this.replaceClassConstants(
        returnArray,
        this.blockSourceMapping
      );

      const blockConfig = await this.parsePhpCode(processedBlockArray);

      return {
        blockConfig,
        blockSources,
      };
    } catch (error: any) {
      console.error("[PHP / blockConfig] Error:", error.message);
      return null;
    }
  }

  /**
   * @description Extracts the return array from the raw PHP configuration file.
   *
   * @returns {string} - The extracted return array as a string.
   */
  private extractReturnArray(): string {
    const match = this.rawPHPConfigFile.match(this.returnArrayMatch);
    return match ? match[1].trim().replace(/;$/, "") : "";
  }

  /**
   * @description Extracts PHP variables from the raw PHP configuration file.
   *
   * @returns {string | null} - The extracted PHP variables as a string, or null if none are found.
   */
  private extractPhpVariables() {
    const matches = this.rawPHPConfigFile.match(
      /\$[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*\[.*?\];/gs
    );

    if (!matches) {
      console.warn("No variables found in the PHP code.");
      return null;
    }

    return matches.join("\n");
  }

  /**
   * @description Processes the use statements in the raw PHP configuration file.
   *
   * @returns {Record<string, BlockSourceInfo>} - A mapping of short names to block source information.
   */
  private processUseStatements() {
    const mapping: Record<string, BlockSourceInfo> = {};
    let match;
    const useRegex = /^use\s+([a-zA-Z0-9_\\]+)(?:\s+as\s+([a-zA-Z0-9_]+))?;/gm;

    while ((match = useRegex.exec(this.rawPHPConfigFile)) !== null) {
      const fullNamespace = match[1];
      const alias = match[2];
      const parts = fullNamespace.split("\\");
      const className = parts.pop() || "";
      const shortName = alias || className;

      if (shortName) {
        let source: "Lyfter" | "LyfterChild" | "Unknown" = "Unknown";

        if (parts[0] === "Lyfter") source = "Lyfter";
        if (parts[0] === "LyfterChild") source = "LyfterChild";

        // try to get the version from the namespace
        const versionMatch = fullNamespace.match(/\\(v\d+)\\/);
        const version = versionMatch ? versionMatch[1] : null;

        mapping[shortName] = { fullName: fullNamespace, source, version };
      }
    }

    this.blockSourceMapping = mapping;
    return mapping;
  }

  /**
   * @description Replaces class constants in the return array with their full namespace strings.
   *
   * @param {string} returnArray - The block return array as a string.
   * @param {Record<string, BlockSourceInfo>} mapping - A mapping of short names to block source information.
   *
   * @returns {string} - The modified return array with class constants replaced.
   */
  private replaceClassConstants(
    returnArray: string,
    mapping: Record<string, BlockSourceInfo>
  ) {
    return returnArray.replace(
      /([a-zA-Z0-9_]+)::class/g,
      (match, className) => {
        if (mapping[className]) {
          // Replace the class constant with the full namespace, escaping backslashes
          return `'${mapping[className].fullName.replace(/\\/g, "\\\\")}'`;
        }

        // If the class name is not found in the mapping, keep it as is
        console.warn(
          `Class constant for "${className}" found, but not in use statements.`
        );

        return match;
      }
    );
  }

  /**
   * @description Creates an array of block source objects from the raw sources mapping.
   *
   * @param {Record<string, BlockSourceInfo>} rawSources - A mapping of short names to block source information.
   *
   * @returns {blockSource[]} - An array of block source objects.
   */
  private createSourceArray(
    rawSources: Record<string, BlockSourceInfo>
  ): blockSource[] {
    // Use Object.entries to iterate over the rawSources mapping
    return Object.entries(rawSources).map(([shortName, blockSourceInfo]) => {
      const { fullName, source, version } = blockSourceInfo;

      // Return a structured blockSource object
      return {
        shortName,
        fullName,
        source,
        version,
      };
    }) as blockSource[];
  }

  /**
   * @description Transforms the keys of the configuration object from number keys to string keys.
   *
   * @param {any} configuration - The configuration object to transform.
   *
   * @returns {BlockConfig} - The transformed configuration object.
   */
  private transformArrayKeys(configuration: any): BlockConfig {
    const finalConfiguration: BlockConfig = { classes: {} };

    for (const key in configuration.classes) {
      if (Object.prototype.hasOwnProperty.call(configuration.classes, key)) {
        const value = configuration.classes[key];

        if (/^\d+$/.test(key) && typeof value === "string") {
          finalConfiguration.classes[value] = null;
        } else {
          finalConfiguration.classes[key] = value;
        }
      }
    }

    return finalConfiguration;
  }

  /**
   * @description Parses the PHP code and executes it to get the block configuration.
   *
   * @param {string} processedBlockArray - The processed block array as a string.
   *
   * @returns {Promise<BlockConfig>} - A promise that resolves to the block configuration object.
   */
  private async parsePhpCode(
    processedBlockArray: string
  ): Promise<BlockConfig> {
    const execSync = await import("child_process").then(
      (module) => module.execSync
    );

    let phpCodeToExecute: string;

    // Mock the translation function to return the text as is if __() is not defined
    const mockTranslationFn =
      "if (!function_exists('__')) { function __($text) { return $text; } } ";

    if (this.variables) {
      phpCodeToExecute = `<?php ${mockTranslationFn} ${this.variables} echo json_encode(${processedBlockArray});`;
    } else {
      phpCodeToExecute = `<?php ${mockTranslationFn} echo json_encode(${processedBlockArray});`;
    }
    const jsonOutputString = execSync("php", {
      input: phpCodeToExecute,
      encoding: "utf8",
    });

    return this.transformArrayKeys(JSON.parse(jsonOutputString)) as BlockConfig;
  }
}
