import { PrismaClient, type Block } from "~/lib/generated/prisma";

/**
 *
 * @description This API endpoint retrieves all blocks from the database.
 *
 * @returns {Block[]} - An array of block objects containing their details.
 */
export default defineEventHandler(async () => {
  const prisma = new PrismaClient();

  const blocks: Block[] = await prisma.block.findMany();

  return blocks;
});
