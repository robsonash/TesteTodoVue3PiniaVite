<!-- HTML -->
<template>
  <section :class="[{ mostrar: modal }, 'modal']">
    <!-- Background -->
    <div class="background"></div>
    <!-- Quadro -->
    <div class="quadro">
      <!-- Título -->
      <div class="titulo">
        <div class="texto">
          <h2><span>Novo</span></h2>
          <h2>CLIENTE</h2>
        </div>
        <button type="button" @click="close">Fechar</button>
      </div>
      <!-- Nome -->
      <label>Nome <span>*</span></label>
      <div class="input cinza">
        <input
          type="text"
          autocomplete="false"
          spellcheck="false"
          placeholder="Digite aqui..."
          v-model="form.name"
        />
      </div>
      <!-- Whatsapp -->
      <label>Whatsapp <span>*</span></label>
      <div class="input cinza">
        <input
          type="tel"
          autocomplete="false"
          spellcheck="false"
          placeholder="(99) 99999-9999"
          v-model="form.number"
        />
      </div>
      {{ cliente }}
      <button type="button" class="principal" @click="salvar">
        Salvar Cliente
      </button>
    </div>
  </section>
</template>

<!-- JS -->
<script>
import { mapActions, mapState } from "pinia";
import { useClienteStore } from "../../../stores/clientes";
import { useModalStore } from "../../../stores/modal";

export default {
  data() {
    return {
      isActive: true,
      form: {
        name: "",
        number: "",
      },
    };
  },
  computed: {
    ...mapState(useModalStore, ["modal"]),
  },
  methods: {
    ...mapActions(useClienteStore, ["adicionarCliente"]),
    ...mapState(useClienteStore, ["clientes"]),
    ...mapActions(useModalStore, ["handleModal"]),
    salvar() {
      this.adicionarCliente(this.form);
      this.form.name = "";
      this.form.number = "";
      this.handleModal(false);
    },
    close() {
      this.handleModal(false);
    },
  },
};

/* const isActive = false;


const todo = {}

const add = () => {
    items.value.push(todo.value);
    todo.value = "";
};
const remove = (item) => {
  items.value = items.value.filter((v) => v !== item);
}; */
</script>

<!-- CSS -->
<style scoped>
section.modal {
  z-index: 10;
}
/* Label */
.quadro label {
  margin: 20px 0 10px 0;
}
/* Linha */
input.endereco {
  margin: 10px 0 0 0;
}
/* Data */
.quadro .data #seletorCalendario {
  position: absolute;
  top: 70px;
  left: -10px;
}
button.principal {
  margin: 20px 0 0 0;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
}
</style>
