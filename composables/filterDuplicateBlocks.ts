import type { Block } from "~/lib/generated/prisma";

export const filterOutDuplicates = (blocks: Block[]) => {
  const seen = new Set();

  return blocks.filter((block) => {
    const key = block.id;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
};
