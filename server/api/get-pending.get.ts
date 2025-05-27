import { PrismaClient, type Block } from "~/lib/generated/prisma";

/**
 *
 * @description This API endpoint retrieves a block by its ID from the database.
 *
 * @param {string} id - The ID of the block to retrieve.
 *
 * @returns {Block[]} - The block object containing its details.
 *
 */
export default defineEventHandler(async () => {
  const prisma = new PrismaClient();

  const blocks: Block[] = await prisma.block.findMany({
    where: { pending: true },
  });

  return blocks;
});
