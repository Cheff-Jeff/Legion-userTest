import { Toaster } from "vue-sonner";

export default defineNuxtPlugin((nuxtapp) => {
  nuxtapp.vueApp.component("VueSonnerToaster", {
    render() {
      return h(Toaster, {
        position: "top-right",
        richColors: true,
        class: "toaster-custom",
      });
    },
  });
});
