import type { Block } from "~/lib/generated/prisma";

export const getRelativeBlocks = async (id: number) => {
  const { data, status } = await useFetch(`/api/get-simular?id=${id}`);

  if (status.value !== "success") return null;

  const blocks = filterOutDuplicates(data.value as Block[]);

  return blocks;
};

const filterOutDuplicates = (blocks: Block[]) => {
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
