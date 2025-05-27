import { PrismaClient, type Block } from "~/lib/generated/prisma";

// expect categorie id
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const sId = query as { id: string };
  const id = parseInt(sId.id);

  try {
    const prisma = new PrismaClient();
    const treeBraches = await prisma.categoryTree.findMany({
      where: {
        descendantId: { equals: id },
        depth: 1,
      },
    });

    if (!treeBraches.length) {
      throw createError({
        statusCode: 404,
        statusMessage: "no connecting categories found",
      });
    }

    let categories = [] as { id: number; category: string }[];

    for (const leaf of treeBraches) {
      const branch = await prisma.categoryTree.findMany({
        where: {
          ancestorId: { equals: leaf.ancestorId },
        },
        include: {
          descendant: {
            include: {
              descendants: true,
            },
          },
        },
      });
      branch.map((paddel) => {
        categories = [
          ...categories,
          {
            id: paddel.descendant.id,
            category: paddel.descendant.category,
          },
        ];
      });
    }

    let blocks = [] as Block[];

    for (const category of categories) {
      const foundBlocks = await prisma.categoriesOnBlocks.findMany({
        where: {
          categoryId: { equals: category.id },
        },
        include: {
          Block: true,
        },
      });

      foundBlocks.map((block) => {
        blocks = [...blocks, block.Block];
      });
    }

    return blocks;
  } catch (error) {
    console.error("Error updating block:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
  // haal catagorien op uit boom met depth 1 en maximaal 10 items
});
