import { PrismaClient } from "~/lib/generated/prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const prisma = new PrismaClient();

    const block = await prisma.block.update({
      where: {
        id: body.id,
      },
      data: {
        pending: body.pending,
      },
    });

    await prisma.categoriesOnBlocks.createMany({
      data: body.categories.map((category: string) => ({
        blockId: block.id,
        categoryId: category,
      })),
    });

    await prisma.tagsOnBlocks.createMany({
      data: body.tags.map((tag: string) => ({
        blockId: block.id,
        tagId: tag,
      })),
    });

    return setResponseStatus(event, 201, "updated");
  } catch (error) {
    console.error("Error updating block:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
