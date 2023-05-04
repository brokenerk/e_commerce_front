<template>
  <div>
    <h1 class="my-4">Products</h1>
    <div class="row">
      <product-card
        v-for="product in products"
        :key="product.id_product"
        :product="product"
        :isWishlist="false"
      ></product-card>
    </div>
    <nav>
      <ul class="pagination justify-content-end">
        <li :class="page_number === 1 ? 'page-item disabled' : 'page-item'">
          <a class="page-link" @click="updatePagination(page_number - 1)" href="#">&laquo;</a>
        </li>
        <li
          v-for="i in num_pages"
          :key="i"
          :class="paginationClass(i)"
        >
          <a class="page-link" @click="updatePagination(i)" href="#">{{ i }}</a>
        </li>
        <li :class="page_number === num_pages ? 'page-item disabled' : 'page-item'">
          <a class="page-link" @click="updatePagination(page_number + 1)" href="#">&raquo;</a>
        </li>
      </ul>
    </nav>
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
      page_number: 1,
      num_pages: null
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
        const response = await this.$axios.get('/products?search=' + this.searchText + '&page_number=' + this.page_number);
        this.products = response.data.products;
        this.page_number = response.data.page_number;
        this.num_pages = response.data.num_pages;
      }
      catch(e) {
        // console.log(e);
        this.$swal.fire("Error Loading Products", "Please try again later", "error");
      }
    },
    paginationClass(i) {
      if (i === this.page_number)
        return 'page-item active';
      else
        return 'page-item';
    },
    updatePagination(i) {
      this.page_number = i;
      this.loadProducts();
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
