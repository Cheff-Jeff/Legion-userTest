<template>
  <div class="container-fluid pt-5">
    <div class="pending pb-3">
      <h1>Pending bloken</h1>
    </div>

    <div v-if="pendingBlocks">
      <div class="row">
        <div
          v-for="block in pendingBlocks"
          :key="block.id"
          class="col-md-3 mb-3 mt-3"
        >
          <NuxtLink :to="`/pending/edit/${block.id}`">
            <ScreenshotBlock
              :block-id="block.id"
              :block-shord-name="block.blockShortName"
              :block-repo="block.repositoryName"
            />
            <!-- <div class="card border-info mb-3 mt-3" style="width: 18rem">
              <img :src="`/screenshots/${block.id}.png`" class="card-img-top" />
              <div class="card-body">
                <b class="card-title border-top border-info pt-2">
                  Block ID: {{ block.id }}
                </b>
              </div>
            </div> -->
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-else>
      <p>No pending blocks</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Block } from "~/lib/generated/prisma";

const { data, status } = await useFetch("/api/get-pending");
const pendingBlocks = ref<Block[]>([]);

if (status.value === "success" && data.value) {
  pendingBlocks.value = data.value as Block[];
}
</script>

<style scoped>
.pending-block {
  max-width: 33%;
  margin: 0 20px;
}
p,
span,
a {
  text-decoration: none !important;
}
</style>
