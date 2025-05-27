import cron from "node-cron";
import { BlockCollector } from "../blockCollector";
import { StyleCollector } from "../styleCollector";
import { ScriptCollector } from "../scriptCollector";
import { CheckCoreUtils } from "../helpers/CheckCoreUtils";
import { TypeScriptTransformer } from "../helpers/TypeScriptTransformer";
import { ScreenShotGenerator } from "../helpers/ScreenShot";
import { PrismaClient } from "~/lib/generated/prisma";
import type { BlockScript, IFullBlock } from "~/types/blockSourceInfo";

export default defineNitroPlugin(() => {
  console.log("Cron job started");

  cron.schedule("0 3 * * MON", async () => {
    // 0 3 * * MON  - maandag om 3 uur elke week
    // */30 * * * * * - elke 30 seconden voor testen
    console.log("running a task every 30 second");

    // await collectBlocks("plastiek");
  });
});

/**
 * @description This function collects blocks from the specified repository, processes them, and saves them to the database.
 *
 * @param repoSlug - The slug of the repository to fetch data from.
 * @returns {Promise<void>} - A promise that resolves when the blocks are collected and saved.
 */
const collectBlocks = async (repoSlug: string) => {
  try {
    const blockCollector: BlockCollector = new BlockCollector();
    const renderedBlocks = await blockCollector.getRenderedBlocks(repoSlug);

    if (!renderedBlocks) return;

    const styleCollector: StyleCollector = new StyleCollector(
      repoSlug,
      renderedBlocks
    );
    const purgedBlocks = await styleCollector.getStyles();

    if (!purgedBlocks) return;

    const scriptCollector: ScriptCollector = new ScriptCollector(repoSlug);
    await new CheckCoreUtils(new TypeScriptTransformer()).checkUtils();

    const coreScript = await scriptCollector.getCoreScripts();

    const fullBlocks: IFullBlock[] = await Promise.all(
      purgedBlocks.map(async (block) => {
        const script: BlockScript | null =
          await scriptCollector.getBlockScripts(block.block.shortName);

        return {
          ...block,
          script,
          coreScript,
        };
      })
    );

    const prisma = new PrismaClient();

    for (const block of fullBlocks as IFullBlock[]) {
      const savedBlock = await prisma.block.create({
        data: {
          scriptName: block.script?.scriptName ?? null,
          translatedCode: block.script?.translatedCode ?? null,
          scriptUrl: block.script?.scriptUrl ?? null,
          coreScript: block.coreScript ?? null,
          css: block.css,
          cssUrl: block.cssUrl,
          blockShortName: block.block.shortName,
          blockHtml: block.block.html,
          headingFont: block.fonts?.headingFont ?? null,
          bodyFont: block.fonts?.bodyFont ?? null,
          pending: true,
          repositoryName: repoSlug,
          repositoryUrl: block.block.blockLocation,
          categories: {
            create: [
              {
                Category: {
                  connectOrCreate: {
                    where: { category: block.block.shortName },
                    create: { category: block.block.shortName },
                  },
                },
              },
            ],
          },
        },
      });

      console.log("Saved block:", savedBlock.id);
      await takeScreenshot(block, savedBlock.id.toString());
    }

    console.log("Blocks saved in DB");
  } catch (error: any) {
    console.error("Error collecting blocks in Cron", error);
  }
};

/**
 * @description This function takes a screenshot of the specified block and saves it to the public/screenshots dir.
 *
 * @param block - The block object containing its details.
 * @param blockId - The ID of the block to take a screenshot of.
 * @returns {Promise<void>} - A promise that resolves when the screenshot is taken.
 */
const takeScreenshot = async (block: IFullBlock, blockId: string) => {
  try {
    const screenShotGenerator = new ScreenShotGenerator(block, blockId);
    await screenShotGenerator.generateScreenshot();
    console.log(
      "Screenshot taken for block: ",
      block.block.shortName,
      "with id: ",
      blockId
    );
  } catch (error) {
    console.error("Error taking screenshot:", error);
  }
};
