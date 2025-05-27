import { PrismaClient, type Category } from "~/lib/generated/prisma";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();

  const body = await readBody(event);

  const newCat = await prisma.category.create({
    data: {
      category: body.category,
    },
  });

  return newCat as Category;
});
