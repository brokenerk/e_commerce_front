<template>
  <div>
    <h1 class="my-4">Products</h1>
    <div class="row">
      <product-card
        v-for="product in products"
        :key="product.id_product"
        :product="product"
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
  computed: {
    searchText() {
      return this.$store.getters.searchText;
    }
  },
  methods: {
    async loadProducts() {
      try {
        const response = await this.$axios.get('/products?search=' + this.searchText);
        this.products = response.data.products;
      }
      catch(e) {
        // console.log(e);
        this.$swal.fire("Error Loading Products", "Please try again later", "error");
      }
    }
  },
  watch: { 
    searchText() {
      this.loadProducts();
    }
  },
  async created() {
    this.loadProducts();
  }
};
</script>
