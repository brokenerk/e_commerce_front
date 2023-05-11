<template>
  <div v-if="hasPayment">
    <div class="row my-4">
      <div class="col-lg-1 col-md-1 col-sm-12">
        <img src="./../../assets/images/paypal.png" style="width: 50px; padding: 5px;"/>
      </div>
      <div class="col-lg-11 col-md-11 col-sm-12">
        <h1>Payment Info</h1>
      </div>
    </div>
    
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-6 col-md-9 col-sm-12">
            <h8><b>Payment Source:</b> {{ Object.keys(payment.payment_source)[0] }}</h8><br/>
            <h8><b>ID:</b> {{ payment.id }}</h8><br/>
            <h8><b>Status:</b> {{ payment.status }}</h8><br/>
            <h8><b>Account ID:</b> {{ payment.payer.payer_id }}</h8><br/>
            <h8><b>Payer Name:</b> {{ payment.payer.name.given_name + ' ' + payment.payer.name.surname }}</h8><br/>
          </div>
          <div class="col-lg-6 col-md-9 col-sm-12">
            <h8><b>Email:</b> {{ payment.payer.email_address }}</h8><br/>
            <h8><b>Address:</b> {{ address }}</h8><br/>
            <h8><b>Date:</b> {{ payment.purchase_units[0].payments.captures[0].update_time }}</h8><br/>
            <h8><b>Country:</b> {{ payment.payer.address.country_code }}</h8>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  props: [
    "payment"
  ],
  computed: {
    address() {
      let shipping_address = this.payment.purchase_units[0].shipping.address;
      return shipping_address.address_line_1 + ' ' + shipping_address.address_line_2 + ' ' + shipping_address.admin_area_2 + ' ' + shipping_address.admin_area_1 + ' ' + shipping_address.postal_code;
    },
    hasPayment() {

      return Object.keys(this.payment).length !== 0;
    }
  }
};
</script>
