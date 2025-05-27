import { PrismaClient, type Tag } from "~/lib/generated/prisma";

export default defineEventHandler(async () => {
  const prisma = new PrismaClient();

  const tags: Tag[] = await prisma.tag.findMany();

  return tags;
});
