<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-bytebank">
      <a class="navbar-brand" href="#">ByteBank</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <BarraNavegacaoQuandoLogado v-if="usuarioLogado" />
        <BarraNavegacaoQuandoDeslogado v-else />
      </div>
    </nav>
  </div>
</template>

<script>
import BarraNavegacaoQuandoLogado from "./BarraNavegacaoQuandoLogado.vue";
import BarraNavegacaoQuandoDeslogado from "./BarraNavegacaoQuandoDeslogado.vue";

export default {
  components: {
    BarraNavegacaoQuandoLogado,
    BarraNavegacaoQuandoDeslogado,
  },
  computed: {
    usuarioLogado() {
      return Boolean(localStorage.getItem("token"));
    },
  },
};
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>
