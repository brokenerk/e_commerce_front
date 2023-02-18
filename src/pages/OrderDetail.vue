<template>
  <div v-if="order">
    <h1 class="my-4">Order ID: {{ order.id_order }}</h1>
		<div>
      <label>Purchased on: {{ order.fh_date }}</label>
		</div>
		
    <order-table
      :order_details="order.order_details"
      :total="order.total_formatted"
      :isOrder="true"
    ></order-table>
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
      .catch((error) => {
        alert(error.response.data.message)
      });
    }
  },
  created() {
    this.loadOrder();
  }
};
</script>
