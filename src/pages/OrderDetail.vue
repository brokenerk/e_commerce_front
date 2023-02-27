<template>
  <div v-if="order">
    <h1 class="my-4">Order ID: {{ order.id_order }}</h1>
		<div>
      <label>Purchased on: {{ order.fh_date }}</label>
		</div>
		
    <order-table
      :orderDetails="order.order_details"
      :total="order.total_formatted"
      :isOrder="true"
    ></order-table>

    <br/>
    <router-link class="btn btn-info" to="/orders">Return to orders</router-link>

  </div>
</template>

<script>
import OrderTable from '../components/Order/OrderTable.vue';


export default {
  components: {
    OrderTable
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
        this.$swal("Error Loading Order", "Please try again later", "error");
      });
    }
  },
  created() {
    this.loadOrder();
  }
};
</script>
