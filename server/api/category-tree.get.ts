import { PrismaClient } from "~/lib/generated/prisma";

export default defineEventHandler(async () => {
  const prisma = new PrismaClient();

  const tree = await prisma.categoryTree.findMany({
    include: {
      ancestor: {
        include: {
          ancestors: true,
        },
      },
      descendant: {
        include: {
          descendants: true,
        },
      },
    },
  });

  if (!tree) {
    throw createError({ statusCode: 404, statusMessage: "problem with seed" });
  }

  return tree;
});
