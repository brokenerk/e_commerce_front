<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <!--Brokenerk-->
      <a class="nav-link text-white" href="/products">
        <span class="navbar-brand mb-0 h1">E-Commerce</span>
      </a>
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
            :href="'/products'" 
            :caption="'Home'"
          ></navbar-item>

          <navbar-item
            :href="'#'" 
            :caption="'Login'"
          ></navbar-item>

          <navbar-item
            :href="'#'" 
            :caption="'Register'"
          ></navbar-item>

          <navbar-item
            :href="'#'" 
            :caption="'Cart'"
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
  props: [],
  data() {
    return {
      collapseClass: "none",
    };
  },
  methods: {
    collapseNavbarList() {
      this.collapseClass === "none"
        ? (this.collapseClass = "block")
        : (this.collapseClass = "none");
    },
  },
};
</script>