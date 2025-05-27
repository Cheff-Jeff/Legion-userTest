<template>
  <div class="container pt-4">
    <h4>Add new category</h4>

    <form v-on:submit.prevent="saveCategory" class="pt-3">
      <label for="categoryName" class="form-label">New category</label>
      <input
        type="text"
        class="form-control"
        id="categoryName"
        placeholder="category name"
        v-model="categoryName"
      />

      <div class="form-check form-switch pt-4 mb-4">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="isNested"
          v-model="isNested"
          :checked="isNested"
        />

        <label class="form-check-label" for="isNested">
          Include category in tree
        </label>
      </div>

      <div class="tree-creator" v-if="isNested">
        <div class="row">
          <div class="col-md-6">
            <span> Select direct parents. empty is toplevel </span>

            <div
              class="form-check"
              v-for="category in categories"
              :key="category.id"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :value="category.id"
                v-model="selectedParent"
              />
              <label class="form-check-label">
                {{ category.category }}
              </label>
            </div>
          </div>

          <div class="col-md-6">
            <span> Select direct childeren. empty id bottom level </span>

            <div
              class="form-check"
              v-for="category in categories"
              :key="category.id"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :value="category.id"
                v-model="selectedChildren"
              />
              <label class="form-check-label">
                {{ category.category }}
              </label>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-success mt-4">Save brach</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import type { Category } from "~/lib/generated/prisma";

const props = defineProps<{
  categories: Category[];
}>();

const categoryName = ref("");
const isNested = ref(false);
const selectedParent = ref<string[]>([]);
const selectedChildren = ref<string[]>([]);

const saveCategory = async () => {
  const { data, status, error } = await useFetch("/api/category-tree", {
    method: "POST",
    body: {
      name: categoryName.value,
      ancestors: selectedParent.value.length > 0 ? selectedParent.value : null,
      descendants:
        selectedChildren.value.length > 0 ? selectedChildren.value : null,
    },
  });

  if (status.value === "success") {
    toast.success("Category branch saved successfully");
  } else {
    toast.error("Error saving category branch");
    console.error("Error saving category:", error.value);
  }
};
</script>
