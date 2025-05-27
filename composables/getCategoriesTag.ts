import type { Category, Tag } from "~/lib/generated/prisma";

export const getCategoriesTags = async () => {
  const preTags = await $fetch("/api/tags");
  const preCategories = await $fetch("/api/categories");

  let tags: Tag[] = [];
  let categories: Category[] = [];

  if (preTags) {
    tags = preTags;
  }

  if (preCategories) {
    categories = preCategories;
  }

  return {
    tags,
    categories,
  };
};
