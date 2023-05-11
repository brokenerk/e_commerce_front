<template>
  <div class="my-4">
    <h1 class="my-4">Wishlist</h1>
    <div class="row">
      <product-card
        v-for="product in products"
        :key="product.id_product"
        :product="product"
        :isWishlist="true"
        @reloadWishlist="loadWishlist($event)"
      ></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/Products/ProductCard.vue";

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: null,
    }
  },
  methods: {
    async loadWishlist() {
      try {
        const response = await this.$axios.get('/wishlist');
        this.products = response.data.wishlist;
      }
      catch(e) {
        // console.log(e);
        this.$swal.fire("Error Loading Wishlist", "Please try again later", "error");
      }
    }
  },
  created() {
    this.loadWishlist();
  }
};
</script>
