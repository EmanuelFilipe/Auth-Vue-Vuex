<template>
  <div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/gerentes" class="nav-link">
          Gerentes
        </router-link>
      </li>
      <li>
        <a href="#" class="nav-link" @click.prevent="efetuarLogout">
          Logout
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { logoutMixin } from "@/mixins";

export default {
  mixins: [logoutMixin],
};
</script>
