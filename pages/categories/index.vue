<template>
  <div class="container-fluid pt-5">
    <div class="row" v-auto-animate>
      <div class="col-md-7">
        <div class="tree">
          <div v-if="tree.length">
            <AppCategoryTree :tree="tree" />
          </div>

          <div v-else>Category tree still need to grow.</div>
        </div>
      </div>

      <div class="col-md-5">
        <AppNewCategory :categories="categories" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category, Prisma } from "~/lib/generated/prisma";
type CategoryTree = Prisma.CategoryTreeGetPayload<{
  include: {
    ancestor: true;
    descendant: true;
  };
}>[];

const { data, status } = await useFetch("/api/category-tree");
const { data: preCategories, status: categoriesStatus } = await useFetch(
  "/api/categories"
);

const tree = ref<CategoryTree>([]);
const categories = ref<Category[]>([]);

if (status.value === "success" && data.value) {
  tree.value = data.value as CategoryTree;
}

if (categoriesStatus.value === "success" && preCategories.value) {
  categories.value = preCategories.value as Category[];
}
</script>
