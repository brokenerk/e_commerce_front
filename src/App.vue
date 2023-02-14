<template>
  <div class="page-container">
    <!-- Navbar -->
    <the-navbar></the-navbar>

    <!-- Page Content -->
    <div class="container content-wrap">
      <div class="row">
        <the-menu></the-menu>

        <div class="col-lg-9 col-md-9">
          <component :is="activePage"></component>
        </div>
      </div>
    </div>

    <!-- Footer-->
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from './components/UI/TheFooter.vue';
import TheMenu from './components/UI/TheMenu.vue';
import TheNavbar from "./components/UI/TheNavBar.vue";
import Products from "./components/Products/Products.vue"

export default {
  components: {
    TheNavbar,
    TheMenu,
    TheFooter,
    Products
  },
  data() {
    return {
      activePage: 'products',
    }
  },
  methods: {
    setActivePage(page) {
      this.activePage = page
    }
  }
};
</script>

<style>
  #app {
    padding-top: 6vh;
  }
</style>

<style scoped>
  .page-container {
    position: relative;
    min-height: 94vh;
  }

  .content-wrap {
    padding-bottom: 139px    /* Footer height */
  }
</style>
