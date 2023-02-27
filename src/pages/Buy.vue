<template>
  <div v-if="cart">
    <h1 class="my-4">{{ title }}</h1>
    <h3>{{ subtitle }}</h3>

    <br :hidden="!paid"/>
    <order-table
      :orderDetails="cart.order_details"
      :total="cart.total_formatted"
      :loadCart="loadCart"
      :isOrder="true"
    ></order-table>

    <div class="card-deck card-bottom" :hidden="paid">
      <user-address></user-address>
      <payment-method
        @setPurchased="setPurchased($event)"
        :orderDetails="cart.order_details"
        :total="cart.total_formatted"
      ></payment-method>
    </div>

    <br/>
    <div class="row" :hidden="!paid">
      <div class="col-lg-6 col-md-6">
        <router-link class="btn btn-success" to="/orders">See it on your completed orders</router-link>
      </div>
      <br/>
      <div class="col-lg-6 col-md-6">
        <router-link class="btn btn-info" to="/products">Or keep shopping</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import OrderTable from '../components/Order/OrderTable.vue';
import PaymentMethod from '../components/Buy/PaymentMethod.vue';
import UserAddress from '../components/Buy/UserAddress.vue';

export default {
  components: {
    OrderTable,
    UserAddress,
    PaymentMethod
  },
  data() {
    return {
      title: 'Proceed to checkout',
      subtitle: '',
      cart: null,
      paid: false
    }
  },
  methods: {
    loadCart() {
      this.cart = null;
      this.$axios.get('/cart')
      .then((response) => {
        this.cart = response.data.cart;
      })
      .catch(() => {
        this.$swal("Error Loading Cart", "Please try again later", "error");
        // console.log(error.response.data.message);
      });
    },
    setPurchased() {
      this.title = 'Order Purchased Satisfactorily. Thank you!';
      this.subtitle = 'You have bought the order with ID ' + this.cart.id_order;
      this.paid = true;
    }
  },
  created() {
    this.loadCart();
  }
};
</script>

<style scoped>
  .card-bottom {
    margin-bottom: 30px;
  }
</style>
