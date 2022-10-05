import { defineStore } from "pinia";

export const useClienteStore = defineStore("cliente", {
  state: () => ({
    clientes: [],
    count: 0,
  }),
  actions: {
    adicionarCliente({ name, number }) {
      console.log("payload", name);
      console.log("payload", number);
      this.clientes.push({
        name: name,
        number: number,
      });
      console.log("this.cliente", this.clientes);
    },
  },
});
