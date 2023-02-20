<template>
  <div class="table-responsive">
    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Amount</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <order-table-row
          v-for="orderDetail in orderDetails"
          :key="orderDetail.id_order"
          :orderDetail="orderDetail"
          :loadCart="loadCart"
          :isOrder="isOrder"
        >
        </order-table-row>
        
        <tr class="table-info">
          <td scope="col"><b>Total</b></td>
          <td></td>
          <td style="width:19%"><b>$ {{ total }}</b></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import OrderTableRow from "./OrderTableRow.vue";


export default {
  components: {
    OrderTableRow
  },
  props: [
    "total", "orderDetails", "loadCart", "isOrder"
  ]
};
</script>
