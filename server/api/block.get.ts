import { PrismaClient, type Block } from "~/lib/generated/prisma";

/**
 *
 * @description This API endpoint retrieves a block by its ID from the database.
 *
 * @param {string} id - The ID of the block to retrieve.
 *
 * @returns {Block} - The block object containing its details.
 *
 */
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { id } = query as { id: string };
  const idInt = parseInt(id);

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "ID is required" });
  }

  if (!idInt || isNaN(idInt)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID must be a number",
    });
  }

  const prisma = new PrismaClient();

  const block: Block | null = await prisma.block.findUnique({
    where: { id: idInt },
    include: {
      categories: {
        include: {
          Category: true,
        },
      },
      tags: {
        include: {
          Tag: true,
        },
      },
    },
  });

  if (!block) {
    throw createError({ statusCode: 404, statusMessage: "Block not found" });
  }

  return block;
});
