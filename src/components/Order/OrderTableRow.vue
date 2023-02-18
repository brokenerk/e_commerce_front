<template>
  <tr>
    <td><img :src="require('./../../assets/images/products/'+ order_detail.product.id_product +'.jpg')" width="100"/></td>
    <td>{{ order_detail.product.tx_name }}</td>
    <td>$ {{ order_detail.product.real_price }}</td>
    <td>{{ order_detail.nu_amount }}</td>
    <td >
      <button 
        v-if="isOrder == false" 
        class="btn btn-success" 
        @click="modifyAmount(order_detail.product.id_product, true)"
      >
        +
      </button>
    </td>
    <td>
      <button 
      v-if="isOrder == false" 
      class="btn btn-secondary" 
      @click="modifyAmount(order_detail.product.id_product, false)"
      >
        -
      </button>
    </td>
    <td>
      <button 
      v-if="isOrder == false" 
      class="btn btn-danger" 
      @click="removeProduct(order_detail.product.id_product)"
      >
        Remove
      </button>
    </td>
    <td></td>
  </tr>
</template>

<script>
export default {
  props: [
    "order_detail", "loadCart", "isOrder"
  ],
  methods: {
    modifyAmount(id_product, add) {
      this.$axios.put('/cart', {
        "id_product": id_product,
        "add": add
      })
      .then(() => {
        this.loadCart();
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
    },
    removeProduct(id_product) {
      this.$axios.delete('/cart', {
        data: {
          "id_product": id_product
        }
      })
      .then(() => {
        this.loadCart();
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
    }
  }
};
</script>
