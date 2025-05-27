import { PrismaClient } from "~/lib/generated/prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body || !body.name) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid request body",
    });
  }

  const { name, ancestors, descendants } = body as {
    name: string;
    ancestors: string[] | null;
    descendants: string[] | null;
  };

  try {
    const prisma = new PrismaClient();
    const newCategory = await prisma.category.create({
      data: {
        category: name,
      },
    });

    let leafs: { ancestorId: number; descendantId: number; depth: number }[] = [
      { ancestorId: newCategory.id, descendantId: newCategory.id, depth: 0 },
    ];

    if (descendants?.length) {
      leafs = filterOutDuplicates([
        ...leafs,
        ...(await generateBranch(
          descendants,
          prisma,
          newCategory.id,
          "descendant"
        )),
      ]);
    }

    if (ancestors?.length) {
      leafs = filterOutDuplicates([
        ...leafs,
        ...(await generateBranch(
          ancestors,
          prisma,
          newCategory.id,
          "ancestor"
        )),
      ]);
    }

    await prisma.categoryTree.createMany({
      data: leafs,
    });

    return setResponseStatus(event, 201, "create");
  } catch (error) {
    console.error("Error creating category tree:", error);
    throw createError({ statusCode: 500, statusMessage: "Database error" });
  }
});

const filterOutDuplicates = (
  branch: {
    ancestorId: number;
    descendantId: number;
    depth: number;
  }[]
) => {
  const seen = new Set();

  return branch.filter((leaf) => {
    const key = `${leaf.ancestorId}-${leaf.descendantId}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
};

const generateBranch = async (
  ids: string[],
  prisma: PrismaClient,
  newCategoryId: number,
  mode: "ancestor" | "descendant"
) => {
  let queue = [...ids];
  let used = new Set<string>();
  let result: { ancestorId: number; descendantId: number; depth: number }[] =
    [];

  while (queue.length) {
    const currentIds = queue.filter((id) => !used.has(id));

    if (currentIds.length === 0) {
      break;
    }

    used = new Set([...used, ...currentIds]);

    const branches = await Promise.all(
      currentIds.map(async (id) => {
        if (mode === "descendant") {
          return await getDescendantLeafs(id, prisma, newCategoryId);
        } else {
          return await getAncestorLeafs(id, prisma, newCategoryId);
        }
      })
    );

    const flatBranches = branches.flat();
    result.push(...flatBranches);

    queue = flatBranches
      .map((leaf) =>
        mode === "descendant"
          ? leaf.ancestorId.toString()
          : leaf.descendantId.toString()
      )
      .filter((id) => !used.has(id));
  }

  return filterOutDuplicates(result);
};

const getDescendantLeafs = async (
  descendant: string,
  prisma: PrismaClient,
  newCategoryId: number
) => {
  const children = await prisma.categoryTree.findMany({
    where: { ancestorId: parseInt(descendant) },
  });

  if (!children.length) {
    return [
      {
        ancestorId: newCategoryId,
        descendantId: parseInt(descendant),
        depth: 1,
      },
    ];
  }

  const childBranches = children.map((branch) => ({
    ancestorId: newCategoryId,
    descendantId: branch.descendantId,
    depth: branch.depth++,
  }));

  childBranches.push({
    ancestorId: newCategoryId,
    descendantId: parseInt(descendant),
    depth: 1,
  });

  return childBranches;
};

const getAncestorLeafs = async (
  ancestor: string,
  prisma: PrismaClient,
  newCategoryId: number
) => {
  const parents = await prisma.categoryTree.findMany({
    where: { descendantId: parseInt(ancestor) },
  });

  if (!parents.length) {
    return [
      { ancestorId: parseInt(ancestor), descendantId: newCategoryId, depth: 1 },
    ];
  }

  const parentBranches = parents.map((branch) => ({
    ancestorId: branch.ancestorId,
    descendantId: newCategoryId,
    depth: branch.depth++,
  }));

  parentBranches.push({
    ancestorId: parseInt(ancestor),
    descendantId: newCategoryId,
    depth: 1,
  });

  return parentBranches;
};
