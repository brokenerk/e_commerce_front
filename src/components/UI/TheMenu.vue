<template>
  <div class="col-lg-3 col-md-3">
    <h1 class="my-4">Menu</h1>
    <div class="list-group">
      <router-link class="list-group-item text-danger" to="/products" @click="$store.commit('setSearchText', '')">Products</router-link>
      <router-link class="list-group-item text-danger" to="/profile" v-if="isLoggedIn">Profile</router-link>
      <router-link class="list-group-item text-danger" to="/wishlist" v-if="isLoggedIn">Wishlist</router-link>
      <router-link class="list-group-item text-danger" to="/cart">Cart</router-link>
      <router-link class="list-group-item text-danger" to="/orders" v-if="isLoggedIn">Orders</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
};
</script>