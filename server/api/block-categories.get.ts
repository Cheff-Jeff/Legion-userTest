import { PrismaClient } from "~/lib/generated/prisma";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const sId = query as { id: string };

  const prisma = new PrismaClient();

  return await prisma.categoriesOnBlocks.findMany({
    where: {
      blockId: parseInt(sId.id),
    },
    include: {
      Category: true,
    },
  });
});
