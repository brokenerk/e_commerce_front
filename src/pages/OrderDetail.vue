<template>
  <div class="my-4" v-if="order">
    <h1 class="my-4">Order ID: {{ order.id_order }}</h1>
		<div>
      <label>Purchased on: {{ order.fh_date }}</label>
		</div>
		
    <order-table
      :orderDetails="order.order_details"
      :total="order.total_formatted"
      :isOrder="true"
    ></order-table>

    <payment-info
      :payment="order.payment"
    ></payment-info>

    <br/>
    <router-link class="btn btn-info" to="/orders">Return to orders</router-link>

  </div>
</template>

<script>
import OrderTable from '../components/Order/OrderTable.vue';
import PaymentInfo from '../components/Order/PaymentInfo.vue';


export default {
  components: {
    OrderTable,
    PaymentInfo
  },
  data() {
    return {
      order: null,
    }
  },
  methods: {
    loadOrder() {
      this.order = null;
      this.$axios.get('/orders/' + this.$route.params.id)
      .then((response) => {
        this.order = response.data.order;
      })
      .catch(() => {
        // console.log(error.response.data.message)
        this.$swal.fire("Error Loading Order", "Please try again later", "error");
      });
    }
  },
  created() {
    this.loadOrder();
  }
};
</script>
