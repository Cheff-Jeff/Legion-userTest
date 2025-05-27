<template>
  <div class="container mb-5 mt-3">
    <h1 class="mb-5">
      {{ selectedBlock?.repositoryName }}
      {{ selectedBlock?.blockShortName }} Block
    </h1>

    <div class="row" v-if="selectedBlock">
      <div class="col-md-4" v-if="selectedBlock.cssUrl">
        <a
          :href="selectedBlock.cssUrl"
          target="_blank"
          class="btn btn-secondary mb-3"
        >
          View CSS
        </a>
      </div>

      <div class="col-md-4" v-if="selectedBlock.scriptUrl">
        <a
          :href="selectedBlock.scriptUrl"
          target="_blank"
          class="btn btn-secondary mb-3 mb-3"
        >
          View TypeScript
        </a>
      </div>

      <div class="col-md-4" v-if="selectedBlock.repositoryUrl">
        <a
          :href="selectedBlock.repositoryUrl"
          target="_blank"
          class="btn btn-secondary mb-3 mb-3"
        >
          View block Repository
        </a>
      </div>
    </div>
  </div>

  <ScopedBlock
    v-if="selectedBlock"
    :block-name="selectedBlock.blockShortName"
    :html="selectedBlock.blockHtml"
    :css="selectedBlock.css"
    :core-script="selectedBlock.coreScript"
    :script="selectedBlock.translatedCode"
    :script-name="selectedBlock.scriptName"
    :body-font="selectedBlock.bodyFont"
    :heading-font="selectedBlock.headingFont"
  />

  <div class="container mt-5 pb-3" v-if="categories && selectedBlock">
    <h3>Vergelijkbare blokken:</h3>
    <AppRelativeBlocks
      :visable-block-id="selectedBlock?.id"
      :class-id="categories[0].categoryId"
    />
  </div>
</template>

<script setup lang="ts">
import type { Block, Prisma } from "~/lib/generated/prisma";

type Categories = Prisma.CategoriesOnBlocksGetPayload<{
  include: {
    Category: true;
  };
}>;

const route = useRoute();
const selectedBlock = ref<Block | null>(null);
const categories = ref<Categories[] | null>(null);

const { data, status } = await useFetch(`/api/block?id=${route.params.id}`);
const { data: preCategories, status: catStatus } = await useFetch(
  `/api/block-categories?id=${route.params.id}`
);

if (status.value === "success" && data.value) {
  selectedBlock.value = data.value;
} else {
  navigateTo("/");
}

if (catStatus.value === "success" || preCategories) {
  categories.value = preCategories.value;
}
</script>

<style scoped>
svg {
  display: inline-block;
  fill: #fff;
  width: 20px;
  margin-right: 5px;
}

.btn-inner {
  display: flex;
  font-size: 17px;
}
</style>
