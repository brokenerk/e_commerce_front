<template>
  <div class="col-lg-3 col-md-3">
    <h1 class="my-4">Menu</h1>
    <div class="list-group">
      <router-link class="list-group-item text-danger" to="/products">Products</router-link>
      <router-link class="list-group-item text-danger" to="/cart">Cart</router-link>
      <router-link class="list-group-item text-danger" to="/users">Profile</router-link>
      <router-link class="list-group-item text-danger" to="/orders">Orders</router-link>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>