<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" @click="openModal">
    {{ props.btnText }}
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="`modalBox${props.identifyer}`"
    tabindex="-1"
    aria-labelledby="modalBoxLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalBoxLabel">
            {{ props.title }}
          </h1>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>

        <div class="modal-body">
          <slot></slot>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
            @click="closeModal"
          >
            Cancel
          </button>

          <button type="button" class="btn btn-success" @click="$emit('save')">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Modal } from "bootstrap";

const props = defineProps<{
  btnText: string;
  title: string;
  identifyer: string;
}>();

const modalRef = ref<HTMLElement | null>(null);
let modalInstance: Modal | null = null;

const openModal = () => {
  if (modalInstance) {
    modalInstance.show();
  }
};

const closeModal = () => {
  if (modalInstance) {
    modalInstance.hide();
  }
};

onMounted(async () => {
  const bootstrap = await import("bootstrap");

  modalRef.value = document.querySelector(`#modalBox${props.identifyer}`);

  if (modalRef.value) {
    modalInstance = new bootstrap.Modal(modalRef.value, {});
  }
});

defineExpose({
  closeModal,
});
</script>
