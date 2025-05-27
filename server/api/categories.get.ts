import { PrismaClient, type Category } from "~/lib/generated/prisma";

export default defineEventHandler(async () => {
  const prisma = new PrismaClient();

  const categories: Category[] = await prisma.category.findMany();

  return categories;
});
