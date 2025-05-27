<template>
  <div class="row" v-if="blocks">
    <div
      class="col-md-3 mb-3 mt-3"
      v-for="block in blocks.slice(0, 8)"
      :key="block.id"
    >
      <div class="item">
        <ScreenshotBlock
          v-if="visableBlockId !== block.id"
          :block-id="block.id"
          :block-shord-name="block.blockShortName"
          :block-repo="block.repositoryName"
          @click="goToBlock(block)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { getRelativeBlocks } from "~/composables/getRelativeBlocks";
import type { Block } from "~/lib/generated/prisma";

const props = defineProps<{
  classId: number;
  visableBlockId: number;
}>();
const blocks = await getRelativeBlocks(props.classId);

const goToBlock = async (block: Block) => {
  await navigateTo({
    path: `/blocks/${block.id}`,
  });
};
</script>

<style scoped>
.item {
  overflow: hidden;
}
</style>
