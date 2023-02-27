<template>
  <div class="card" v-if="address">
    <div class="card-body">
      <h5 class="card-title text-primary">Shipping Address</h5>

      <p class="card-text">Street: {{ address.tx_street }}</p>
      <p class="card-text">City: {{ address.tx_city }}</p>
      <p class="card-text">State: {{ address.tx_state }}</p>
      <p class="card-text">Zip Code: {{ address.tx_zipcode }}</p>
      <p class="card-text">Telephone: {{ address.tx_telephone }}</p>
    </div>
    <div class="card-footer">
      <router-link class="btn btn-info" to="/profile">Edit Address</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      address: null
    }
  },
  methods: {
    getAddress() {
      this.$axios.get('/users')
      .then((response) => {
        this.address = response.data.user;
      })
      .catch(() => {
        this.$swal("Error Loading Address", "Please try again later", "error");
        // console.log(error.response.data.message);
      });
    }
  },
  created() {
    this.getAddress();
  }
};
</script>
