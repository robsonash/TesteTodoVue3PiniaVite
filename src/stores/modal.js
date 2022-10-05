import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    modal: false,
  }),
  actions: {
    handleModal(valor) {
      this.modal = valor;
      console.log("modal", valor);
    },
  },
});
