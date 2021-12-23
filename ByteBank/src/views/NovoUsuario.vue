<template>
  <div class="container">
    <h1>Novo Usuário</h1>
    <form @submit.prevent="enviarFormulario">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" v-model="usuario.nome" />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="text" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <div><button class="btn btn-primary" type="submit">Salvar</button></div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    enviarFormulario() {
      axios
        .post("http://localhost:8000/auth/register", this.usuario)
        .then((resp) => {
          console.log(resp);
          this.$router.push({ name: "login" });
        })
        .catch((erro) => console.log(erro));
    },
  },
};
</script>

<style scoped></style>
