import { filterOutDuplicates } from "~/composables/filterDuplicateBlocks";
import { PrismaClient } from "~/lib/generated/prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const prisma = new PrismaClient();

  if (!body.keywords) {
    return setResponseStatus(event, 400, "Bad Request");
  }

  const keywords = body.keywords as string[];
  const keywordsFilter = keywords.map((keyword) => ({
    OR: [
      { headingFont: { contains: keyword } },
      { bodyFont: { contains: keyword } },
      { repositoryName: { contains: keyword } },
      {
        tags: {
          some: {
            Tag: {
              tag: { contains: keyword },
            },
          },
        },
      },
      {
        categories: {
          some: {
            Category: {
              category: { contains: keyword },
            },
          },
        },
      },
    ],
  }));

  const blocks = await prisma.block.findMany({
    where: {
      AND: keywordsFilter,
    },
    include: {
      tags: { include: { Tag: true } },
      categories: { include: { Category: true } },
    },
  });

  return filterOutDuplicates(blocks);
});
