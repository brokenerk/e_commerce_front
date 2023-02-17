<template>
  <div v-if="cart">
    <h1 class="my-4">Cart - Order ID: {{ cart.id_order }}</h1>
		<div>
      <label>Updated: {{ cart.fh_date }}</label>
		</div>
		
		<div class="form-group">
      <router-link class="btn btn-primary" to="/buy">Proceed to checkout</router-link>
    </div>
		
    <order-table
      :order_details="cart.order_details"
      :total="cart.total_formatted"
      :loadCart="loadCart"
    ></order-table>
  </div>
  <div v-else>
    <h1 class="my-4">Cart is Empty</h1>
    <div class="form-group">
      <router-link class="btn btn-primary" to="/products">Go to Products</router-link>
    </div>
  </div>
</template>

<script>
import OrderTable from '../components/Order/OrderTable.vue';


export default {
  components: {
    OrderTable
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  data() {
    return {
      cart: null,
    }
  },
  methods: {
    loadCart() {
      this.cart = null;
      this.$axios.get('/cart')
      .then((response) => {
        this.cart = response.data.cart;
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
    }
  },
  created() {
    this.loadCart();
  }
};
</script>
