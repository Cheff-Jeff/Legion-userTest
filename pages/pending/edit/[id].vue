<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-5">
        <h1>
          Edit pending {{ block?.blockShortName }} {{ block?.repositoryName }}
        </h1>

        <img :src="`/screenshots/${block?.id}.png`" alt="Block" />
      </div>

      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6">
            <Model
              ref="tagModalRef"
              title="create new tag"
              btn-text="create new tag"
              identifyer="Tag"
              @save="addTag"
            >
              <form v-on:submit.prevent="addTag">
                <label for="categoryName" class="form-label">New tag</label>
                <input
                  type="text"
                  class="form-control"
                  id="categoryName"
                  placeholder="tag name"
                  v-model="newTag"
                />
              </form>
            </Model>
          </div>
        </div>

        <form v-on:submit.prevent="updateBlock">
          <div class="row pt-5">
            <div class="col-md-6">
              <p>Selecteerd De meest directe categorien</p>

              <div class="form-check" v-for="category in categories">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="category.id"
                  id="checkDefault"
                  :checked="
                    block?.categories.find((cat) => cat.id === category.id)
                      ? true
                      : false
                  "
                  v-model="selectedCats"
                />

                <label class="form-check-label" for="checkDefault">
                  {{ category.category }}
                </label>
              </div>
            </div>

            <div class="col-md-6">
              <p>Selecteer relevante tag's</p>

              <div class="form-check" v-for="tag in tags">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="tag.id"
                  id="checkDefault"
                  :checked="
                    block?.tags.find((blockTag) => blockTag.id === tag.id)
                      ? true
                      : false
                  "
                  v-model="selectedTags"
                />

                <label class="form-check-label" for="checkDefault">
                  {{ tag.tag }}
                </label>
              </div>
            </div>

            <div class="col-md-12">
              <button type="submit" class="btn btn-success mt-3">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import type { Category, Prisma, Tag } from "~/lib/generated/prisma";

type blockWithfilters = Prisma.BlockGetPayload<{
  include: { categories: true; tags: true };
}>;

interface ModalComponentExposed {
  closeModal: () => void;
}

const route = useRoute();
const block = ref<blockWithfilters | null>(null);
const categories = ref<Category[]>([]);
const tags = ref<Tag[]>([]);
const selectedTags = ref([]);
const selectedCats = ref([]);

const newTag = ref<string>("");
const tagModalRef = ref<ModalComponentExposed | null>(null);

const { data: selectedBlock, status: selectedBlockStatus } = await useFetch(
  `/api/block?id=${route.params.id}`
);
const { data: categoryCollection, status: categoriesStatus } = await useFetch(
  "/api/categories"
);
const { data: tagCollection, status: tagsStatus } = await useFetch("/api/tags");

if (selectedBlockStatus.value === "success" && selectedBlock.value) {
  block.value = selectedBlock.value as blockWithfilters;
} else {
  navigateTo("/");
}

if (categoriesStatus.value === "success" && categories) {
  categories.value = categoryCollection.value as Category[];
}

if (tagsStatus.value === "success" && tagCollection) {
  tags.value = tagCollection.value as Tag[];
}

const updateBlock = async () => {
  const { data, status } = await useFetch("/api/update-block-post", {
    method: "POST",
    body: {
      id: block.value?.id ? block.value?.id : route.params.id,
      pending: false,
      tags: selectedTags,
      categories: selectedCats,
    },
  });

  if (status.value === "success") {
    toast.success("Block updated");
    navigateTo("/pending");
  } else {
    toast.error("Error saving block");
  }
};

const addTag = async () => {
  const { data, status } = await useFetch("/api/new-tag", {
    method: "POST",
    body: {
      tag: newTag.value.toString(),
    },
  });

  if (status.value === "success" && data.value) {
    tags.value.push(data.value as Tag);
    toast.success("Tag added");

    if (tagModalRef.value) {
      tagModalRef.value.closeModal();
    }
  } else {
    toast.error("Error adding tag");
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
