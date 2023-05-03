<template>
  <tr>
    <td>
      <router-link 
        :to="'/products/' + orderDetail.product.id_product" 
        style="text-decoration: none; color: inherit; width: 100%;"
      >
        <img :src="require('./../../assets/images/products/'+ orderDetail.product.id_product +'.jpg')" width="200"/>
      </router-link>
    </td>
    <td>
      <router-link 
        :to="'/products/' + orderDetail.product.id_product" 
        style="text-decoration: none; color: inherit; width: 100%;"
      >
        {{ orderDetail.product.tx_name }}
      </router-link>
      </td>
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
      <router-link 
        v-else-if="!orderDetail.product.hasUserReview"
        class="btn btn-info" 
        :to="'/review/' + orderDetail.product.id_product"
      >
        Review
      </router-link>
      <p v-else>Reviewed</p>
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
        this.$swal.fire("Error Modifying Amount", errorMessage, "error");
        // console.log(error.response.data.message);
      });
    },
    removeProduct(idProduct) {
      this.$swal.fire({
        title: 'Remove Product from Cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
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
            this.$swal.fire("Error Removing Product", errorMessage, "error");
          });
        }
      });
    }
  }
};
</script>
