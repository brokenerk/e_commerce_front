<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-4" id="col-card">
    <router-link 
      :to="'/products/' + product.id_product" 
      tag="div" 
      class="card h-100"
      style="text-decoration: none; color: inherit;"
    >
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
        <div class="row text-center">
          <div class="col">
            <button class="btn btn-warning" @click="addToCart(product.id_product)" v-if="!product.in_cart">Add to Cart</button>
            <router-link class="btn btn-warning" to="/cart" v-else>In Cart</router-link>
          </div>
          <div class="col" v-if="!isWishlist">
            <button class="btn btn-info" @click="addToWishlist(product.id_product)">Add Wishlist</button>
          </div>
          <div class="col" v-if="isWishlist">
            <button class="btn btn-danger" @click="removeFromWishlist(product.id_product)">Remove</button>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
    "product", "isWishlist"
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
        this.$swal.fire("Error Adding Product", errorMessage, "error");
      });
    },
    async addToWishlist(idProduct) {
      try {
        const response = await this.$axios.post('/wishlist', {
          "id_product": idProduct
        });
        this.$swal.fire(response.data.message, "", "info");
      }
      catch(e) {
        // console.log(e);
        this.$swal.fire("Error Adding Product", "Please try again later", "error");
      }
    },
    removeFromWishlist(idProduct) {
      this.$swal.fire({
        title: 'Remove Product from Wishlist?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.delete('/wishlist', {
            data: {
              "id_product": idProduct
            }
          })
          .then(() => {
            this.$emit('reloadWishlist');
          })
          .catch((error) => {
            // console.log(error.response.data.message);
            const errorMessage = error.response ? error.response.data.message : "Please try again later";
            this.$swal.fire("Error Removing Product", errorMessage, "error");
          });
        }
      });
    },
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
