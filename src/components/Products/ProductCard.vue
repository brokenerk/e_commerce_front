<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-4" id="col-card">
    <div class="card h-100">
      <img class="card-img-top" :src="require('./../../assets/images/products/'+ product.id_product +'.jpg')" width="100" alt=""/>
      <div class="card-body">
        <h4 class="card-title text-primary">
          {{ product.tx_name }}
        </h4>
        <div class="row">
          <div class="col-lg-6 col-md-9 mb-6">
            <h8>$ {{ product.ft_price }}</h8>
          </div>
          <div class="col-lg-6 col-md-9 mb-6">
            <h8>{{ product.ft_discount }}% OFF</h8>
          </div>
        </div>
        <h5>Price: $ {{ product.real_price }}</h5>
        <!-- <p class="card-text">{{ product.tx_description }}</p> -->
        <h8>On Stock: {{ product.nu_stock }} remaining</h8>
      </div>
      <div class="card-footer" v-if="isLoggedIn">
        <button class="btn btn-info" @click="addToCart(product.id_product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "product"
  ],
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    addToCart(idProduct) {
      this.$axios.post('/cart', {
        "id_product": idProduct
      })
      .then(() => {
        this.$router.replace('/cart');
      })
      .catch((error) => {
        // console.log(error.response.data.message);
        const errorMessage = error.response ? error.response.data.message : "Please try again later";
        this.$swal("Error Adding Product", errorMessage, "error");
      });
    }
  }
};
</script>

<style scoped>
  .col {
    padding: 0px;
  }
  #col-card {
    margin-bottom: 20px;
  }
</style>
