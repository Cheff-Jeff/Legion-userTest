<template>
  <div class="container-fluid wrapper p-5">
    <h1>Blokken</h1>

    <div v-if="blocks.length > 0">
      <div class="d-flex flex-wrap" v-auto-animate>
        <div
          class="mt-3 mb-5 block-item"
          v-for="block in blocks"
          :key="block.id"
        >
          <ScreenshotBlock
            :block-id="block.id"
            :block-shord-name="block.blockShortName"
            :block-repo="block.repositoryName"
            class="block-item-inner"
            @click="goToBlock(block)"
          />
        </div>
      </div>
    </div>

    <div v-else>
      <p class="pt-3">Geen blokken gevonden...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ScreenshotBlock from "~/components/screenshotBlock.vue";
import type { Block } from "~/lib/generated/prisma";

const { data, status } = await useAsyncData("blocks", () =>
  $fetch("/api/blocks")
);

const blocks = ref<Block[]>([]);
const filterState = useState<{ tagIds: string[]; categorieIds: string[] }>(
  "filterState"
);

if (status.value === "success" && data.value) {
  blocks.value = data.value;
}

const goToBlock = async (block: Block) => {
  await navigateTo({
    path: `/blocks/${block.id}`,
  });
};

watch(filterState, async (value) => {
  const { data, status } = await useAsyncData("filterBlocks", () =>
    $fetch("/api/filter-blocks", {
      method: "POST",
      body: filterState.value,
    })
  );
  if (status.value === "success") {
    blocks.value = data.value as Block[];
  }
});
</script>

<style scoped>
.block-item {
  max-width: 33%;
  margin: 0 7px;
}

/* .wrapper {
  background-color: #f5f5f5;
} */

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.block-item-inner {
  width: 21.5rem;
}
</style>
