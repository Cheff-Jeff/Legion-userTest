import { filterOutDuplicates } from "~/composables/filterDuplicateBlocks";
import { PrismaClient } from "~/lib/generated/prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const prisma = new PrismaClient();
  const tagIds = (body.tagIds as string[]) ?? [];
  const categoryIds = (body.categorieIds as string[]) ?? [];

  const descendants = await getDescendants(
    categoryIds.map((category) => parseInt(category)),
    prisma
  );

  const allCategoryIds = [
    ...categoryIds.map((category) => parseInt(category)),
    ...descendants.map((descendant) => descendant.descendantId),
  ];

  const blocks = await getBlocks(
    allCategoryIds,
    tagIds.map((tag) => parseInt(tag)),
    prisma
  );

  return filterOutDuplicates(blocks);
});

const getDescendants = async (categoryIds: number[], prisma: PrismaClient) => {
  return await prisma.categoryTree.findMany({
    where: {
      ancestorId: { in: categoryIds },
    },
  });
};

const getBlocks = async (
  categories: number[],
  tags: number[],
  prisma: PrismaClient
) => {
  return await prisma.block.findMany({
    where: {
      AND: [
        tags.length > 0
          ? {
              tags: {
                some: {
                  tagId: { in: tags.map(Number) },
                },
              },
            }
          : {},

        categories.length > 0
          ? {
              categories: {
                some: {
                  categoryId: { in: categories },
                },
              },
            }
          : {},
      ],
    },
    include: {
      tags: { include: { Tag: true } },
      categories: { include: { Category: true } },
    },
  });
};
