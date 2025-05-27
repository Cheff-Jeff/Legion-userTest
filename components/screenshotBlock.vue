<template>
  <div class="card border-info">
    <div class="wrapper">
      <img :src="`/screenshots/${blockId}.png`" class="card-img-top" />
    </div>

    <div class="card-body">
      <!-- <h5 class="card-title border-top border-info pt-2">
        {{ blockShordName }}
      </h5> -->

      <p class="card-text border-top border-info pt-2" v-if="blockRepo">
        {{ blockShordName }} van
        {{ blockRepo }}
      </p>

      <span class="link-primary"> Bekijk blok </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  blockId: number;
  blockShordName: string;
  blockRepo: string | null;
}>();
</script>

<style scoped>
.card {
  box-shadow: none;
  transition: all 0.3s ease;
  padding: 5px;
}

.card:hover {
  cursor: pointer;
  box-shadow: 5px 5px 2px 1px #f0f0f0;
  transition: all 0.3s ease;
}

.wrapper {
  height: 250px;
  width: 100%;
  overflow: hidden;
  display: flex;
}

.card-img-top {
  transform: scale(1.8);
  margin-top: auto;
  margin-bottom: auto;
  object-fit: contain;
}

.card-body {
  z-index: 1;
  background: #fff;
}
</style>
