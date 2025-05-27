<template>
  <div class="result-wrapper" v-if="visible">
    <div class="container" @mouseleave="closeModal">
      <div class="inner">
        <div class="search-ressults">
          <div class="modal-head">
            <h4 class="pb-3">Zoek resultaten:</h4>

            <svg
              @click="closeModal"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
              />
            </svg>
          </div>

          <div class="blocks" v-if="searchResults.length > 0">
            <div class="d-flex flex-wrap" v-auto-animate>
              <div
                class="mt-3 mb-5 block-item"
                v-for="block in searchResults"
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
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Block } from "~/lib/generated/prisma";

const emit = defineEmits(["closeModal"]);
const props = defineProps<{
  searchResults: Block[];
  visible: boolean;
}>();
const modalIsVisible = ref<boolean>(props.visible);

const closeModal = () => {
  emit("closeModal");
};

const goToBlock = async (block: Block) => {
  closeModal();

  await navigateTo({
    path: `/blocks/${block.id}`,
  });
};
</script>

<style scoped>
.block-item {
  margin: 0 10px;
  width: 18rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.block-item:hover {
  cursor: pointer;
  transform: scale(1.02);
  transition: all 0.3s ease;
}

.search-ressults {
  background: #fff;
  padding: 20px;
  padding-top: 0;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  max-height: 80dvh;
  overflow-y: auto;
  position: relative;
}

.modal-head {
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 20px;
  width: 100%;
  background: #fff;
  box-shadow: 6px 3px 5px #fcfcfc;
  display: flex;
  justify-content: space-between;
}

.modal-head svg {
  cursor: pointer;
  width: 23px;
  height: 23px;
  fill: #727272;
  transition: all 0.3s ease;
}

.modal-head svg:hover {
  fill: #dc3545;
  transition: all 0.3s ease;
}

.result-wrapper {
  position: fixed;
  padding-top: 50px;
  top: 70px;
  left: 0;
  background-color: #72727282;
  height: 100vh;
  height: 100dvh;
  backdrop-filter: blur(3px);
  z-index: 10;
}
</style>
