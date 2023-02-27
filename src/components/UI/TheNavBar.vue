<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <!--Brokenerk-->
      <router-link class="nav-link text-white" to="/">
        <span class="navbar-brand mb-0 h1">E-Commerce</span>
      </router-link>
      <!--Boton responsive-->
      <button class="navbar-toggler" @click="collapseNavbarList">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--Lista links-->
      <div class="navbar-collapse" :style="'display:' + collapseClass">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <div class="nav-link text-white">
              <slot></slot>
            </div>
          </li>

          <navbar-item
            :to="'/products'" 
            :caption="'Home'"
          ></navbar-item>

          <navbar-item
            v-if="!isLoggedIn"
            :to="'/login'" 
            :caption="'Login'"
          ></navbar-item>

          <navbar-item
            v-if="!isLoggedIn"
            :to="'/register'" 
            :caption="'Register'"
          ></navbar-item>

          <navbar-item
            v-if="isLoggedIn"
            :to="'/profile'" 
            :caption="'Profile'"
          ></navbar-item>

          <navbar-item
            :to="'/cart'" 
            :caption="'Cart'"
          ></navbar-item>

          <navbar-item
            v-if="isLoggedIn"
            :to="''" 
            :caption="'Logout'"
            @click="logout()"
          ></navbar-item>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarItem from "./NavBarItem.vue";
export default {
  components: {
    NavbarItem,
  },
  data() {
    return {
      collapseClass: "none",
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    collapseNavbarList() {
      this.collapseClass === "none"
        ? (this.collapseClass = "block")
        : (this.collapseClass = "none");
    },
    logout() {
      this.$store.dispatch('logout');

      if (this.$route.redirectedFrom === undefined)
        this.$router.replace('/products');
      else
        this.$router.replace(this.$route.redirectedFrom.fullPath)
    }
  },
};
</script>