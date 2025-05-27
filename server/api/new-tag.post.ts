import { PrismaClient } from "~/lib/generated/prisma";
import { Prisma } from "~/lib/generated/prisma";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const body = await readBody(event);

  const newTag = await prisma.tag.create({
    data: {
      tag: body.tag,
    },
  });

  return newTag;
});
