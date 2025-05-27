/**
 *
 * @description This class is responsible for transforming TypeScript code into JavaScript code using esbuild.
 */
export class TypeScriptTransformer {
  /**
   *
   * @description Transforms TypeScript code into JavaScript code using esbuild.
   *
   * @param {string} tsCode - The TypeScript code to be transformed.
   *
   * @returns {Promise<string | null>} - A promise that resolves to the transformed JavaScript code or null if an error occurs.
   *
   */
  public async transform(tsCode: string) {
    try {
      const transform = await import("esbuild").then(
        (module) => module.transform
      );

      if (!tsCode) {
        throw new Error("TypeScript code is null");
      }

      const jsCode = await transform(this.replaceModuleImports(tsCode), {
        loader: "ts",
        minify: true,
      });

      return jsCode.code.replace("export", "");
    } catch (error: any) {
      console.error(
        `[TypeScriptTransformer] ERROR Processing Typescript: ${error.message}`
      );

      return null;
    }
  }

  /**
   *
   * @description Replaces module imports in the TypeScript code with CDN links.
   *
   * @param {string} tsCode - The TypeScript code to be transformed.
   *
   * @returns {string} - The transformed TypeScript code with CDN links.
   *
   */
  private replaceModuleImports(tsCode: string): string {
    const importRegex = /\s+from\s+['"]([^'"]+)['"]/g;
    const dynamicImportRegex = /=\s*await\s*import\(['"]([^'"]+)['"]\)/g;

    tsCode = tsCode.replace(importRegex, this.replaceWithCDN);
    tsCode = tsCode.replace(dynamicImportRegex, this.replaceWithCDN);

    return tsCode;
  }

  private isNodeModule(importPath: string): boolean {
    return (
      !importPath.startsWith(".") &&
      !importPath.startsWith("/") &&
      !importPath.startsWith("~")
    );
  }

  /**
   *
   * @description Replaces the import path with a CDN link if it is a node module.
   *
   * @param {string} match - The matched string from the regex.
   *
   * @param {string} importPath - The import path extracted from the matched string.
   *
   * @returns {string} - The modified string with the CDN link.
   *
   */
  private replaceWithCDN(match: string, importPath: string): string {
    if (this.isNodeModule(importPath)) {
      return match.replace(importPath, `https://cdn.skypack.dev/${importPath}`);
    }
    return match;
  }
}
