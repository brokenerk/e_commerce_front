<template>
  <tr>
    <td><img :src="require('./../../assets/images/products/'+ orderDetail.product.id_product +'.jpg')" width="100"/></td>
    <td>{{ orderDetail.product.tx_name }}</td>
    <td>$ {{ orderDetail.product.real_price }}</td>
    <td>{{ orderDetail.nu_amount }}</td>
    <td >
      <button 
        v-if="isOrder == false" 
        class="btn btn-success" 
        @click="modifyAmount(orderDetail.product.id_product, true)"
      >
        +
      </button>
    </td>
    <td>
      <button 
      v-if="isOrder == false" 
      class="btn btn-secondary" 
      @click="modifyAmount(orderDetail.product.id_product, false)"
      >
        -
      </button>
    </td>
    <td>
      <button 
      v-if="isOrder == false" 
      class="btn btn-danger" 
      @click="removeProduct(orderDetail.product.id_product)"
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
    "orderDetail", "loadCart", "isOrder"
  ],
  methods: {
    modifyAmount(idProduct, add) {
      this.$axios.put('/cart', {
        "id_product": idProduct,
        "add": add
      })
      .then(() => {
        this.loadCart();
      })
      .catch((error) => {
        const errorMessage = error.response ? error.response.data.message : "Please try again later";
        this.$swal("Error Modifying Amount", errorMessage, "error");
        // console.log(error.response.data.message);
      });
    },
    removeProduct(idProduct) {
      this.$axios.delete('/cart', {
        data: {
          "id_product": idProduct
        }
      })
      .then(() => {
        this.loadCart();
      })
      .catch((error) => {
        // console.log(error.response.data.message);
        const errorMessage = error.response ? error.response.data.message : "Please try again later";
        this.$swal("Error Removing Product", errorMessage, "error");
      });
    }
  }
};
</script>
