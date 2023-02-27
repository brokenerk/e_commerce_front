<template>
  <div>
    <h1 class="my-4">My Orders</h1>

    <div class="table-responsive">
      <table class="table table-striped table-hover table-fixed">
        <thead class="thead-dark">
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>State</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr
              v-for="order in orders"
              :key="order.id_order"
            >
              <td>{{ order.id_order }}</td>
              <td>{{ order.fh_date }}</td>
              <td>Purchased</td>
              <td>$ {{ order.total_formatted }}</td>
              <td>
                <router-link 
                  class="btn btn-info" 
                  :to="'/orders/' + order.id_order"
                >
                  View
                </router-link>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: null
    }
  },
  methods: {
    getOrders() {
      this.orders = null;
      this.$axios.get('/orders')
      .then((response) => {
        this.orders = response.data.orders;
      })
      .catch(() => {
        // console.log(error.response.data.message);
        this.$swal.fire("Error Loading Orders", "Please try again later", "error");
      });
    }
  },
  created() {
    this.getOrders();
  }
};
</script>
