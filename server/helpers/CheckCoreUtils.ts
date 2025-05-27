import type {
  CommitInfo,
  DirSourceInfo,
  FileSourceInfo,
} from "~/types/bitbucket";
import type { TypeScriptTransformer } from "./TypeScriptTransformer";
import { PrismaClient } from "~/lib/generated/prisma";

/**
 * TODO: Research better solution for this
 * @description This class is responsible for checking and scraping utils from the Bitbucket repository.
 *
 * @param {TypeScriptTransformer} compiler - The TypeScript transformer instance used for transforming TypeScript code.
 */
export class CheckCoreUtils {
  private config = useRuntimeConfig();
  private apiHeaders = {
    method: "GET",
    headers: {
      Authorization: `Basic ${btoa(
        `${this.config.bitBucketApiUser}:${this.config.bitBucketApiKey}`
      )}`,
      Accept: "application/json;charset=UTF-8",
    },
  };
  private tsCompiler: TypeScriptTransformer;
  private prisma: PrismaClient;

  constructor(compiler: TypeScriptTransformer) {
    this.tsCompiler = compiler;
    this.prisma = new PrismaClient();
  }

  /**
   * @description This method checks if the utils are outdated and scrapes them if necessary.
   * It fetches the utils directory from Bitbucket, checks the commit date, and stores new data if needed.
   *
   * @returns {Promise<void>} - A promise that resolves when the check is complete.
   */
  public async checkUtils() {
    try {
      const preTsUtils = await fetch(
        `${this.config.bitBucketBaseUrl}/lyfter-core-theme/src/master/ts/util/`,
        this.apiHeaders
      );

      if (preTsUtils.status !== 200) {
        throw new Error(
          "Error fetching utils directory: " + preTsUtils.statusText
        );
      }

      const tsUtils = JSON.parse(await preTsUtils.text()) as DirSourceInfo;

      await Promise.all(
        tsUtils.values.map(async (file: FileSourceInfo) => {
          const commitUrl = file.commit.links.self.href;
          const preCommit = await fetch(commitUrl, this.apiHeaders);

          if (preCommit.status !== 200) {
            console.error("Error fetching commit:", preCommit.statusText);
            return;
          }

          const commit = JSON.parse(await preCommit.text()) as CommitInfo;
          const commitDate = new Date(commit.date);

          const isUpdated = await this.utilIsUpdated(file.path, commitDate);

          if (isUpdated) {
            await this.scrapeUtil(file.path);

            const utilName = file.path.split("/")[2];

            const util = await this.prisma.util.findUnique({
              where: { name: utilName },
            });

            if (!util) {
              await this.prisma.util.create({
                data: {
                  name: utilName,
                  commitData: commitDate.toString(),
                },
              });
            } else {
              await this.prisma.util.update({
                where: { name: utilName },
                data: {
                  commitData: commitDate.toString(),
                },
              });
            }

            console.log("util scraped:", file.path);
          } else {
            console.log("util is up to date:", file.path);
          }
        })
      );
    } catch (error: any) {
      console.error("Error fetching utils directory:", error.message);
      return;
    }
  }

  private async utilIsUpdated(utilPath: string, newCommitDate: Date) {
    try {
      const utilName = utilPath.split("/")[2];

      const utilInDb = await this.prisma.util.findUnique({
        where: { name: utilName },
      });

      if (!utilInDb) {
        console.warn("Error fetching util:", utilName);
        return true;
      }

      const commitDateInDB = new Date(utilInDb.commitData);

      if (newCommitDate.getTime() > commitDateInDB.getTime()) {
        return true;
      }

      return false;
    } catch (error: any) {
      console.error("error comparing commit date:", error.message);
      return false;
    }
  }

  /**
   * @description This method scrapes a utility file from the Bitbucket repository and saves it to the public directory as JavaScript mini.
   *
   * @param {string} utilPath - The path of the utility file to scrape.
   *
   * @returns {Promise<void>} - A promise that resolves when the scraping is complete.
   */
  private async scrapeUtil(utilPath: string) {
    try {
      const utilTS = await fetch(
        `${this.config.bitBucketBaseUrl}/lyfter-core-theme/src/master/${utilPath}`,
        this.apiHeaders
      );
      const utilCode = await this.tsCompiler.transform(await utilTS.text());

      const utilAtributes = utilPath.split("/");

      const writeFile = await import("fs/promises").then(
        (module) => module.writeFile
      );

      await writeFile(
        `./public/utils/${utilAtributes[2].replace(".ts", ".js")}`,
        "export" + utilCode
      );

      return;
    } catch (error: any) {
      console.error(error);
      console.error(`[util / Scraper] ERROR scraping til: ${error.message}`);
      return;
    }
  }
}
