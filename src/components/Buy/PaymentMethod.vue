<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-primary">Payment Method</h5>
			<span class="card-errors text-danger"></span>

      <div class="row" style="padding:10px;">
        <img src="./../../assets/images/credit-cards.png" style="width: 100%;"/>
      </div>

      <div id="paypal"></div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    "total", "orderDetails"
  ],
  methods: {
    loadPaypal() {
      window.paypal
        .Buttons({
          createOrder: async () => {
            const response = await this.$axios.get('/buy');
            return response.data.id;
          },
          onApprove: async (data) => {
            // const orderData = response.data;
            this.$axios.post('/buy', {
              "paypal_order_id": data.orderID
            }).then(() => {
              this.$axios.put('/buy')
              .then(() => {
                this.$swal.fire("Order Purchased", "", "success");
                // console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                this.$emit('setPurchased');
              })
              .catch((error) => {
                const errorMessage = error.response ? error.response.data.message : "Please try again later";
                this.$swal.fire("Error Purchasing Order", errorMessage, "error");
                // console.log(error.response.data.message);
              });
            })
            .catch((error) => {
              const errorMessage = error.response ? error.response.data.message : "Please try again later";
              this.$swal.fire("Error Purchasing Order", errorMessage, "error");
              // console.log(error.response.data.message);
            });
          },
          onError: (error) => {
            const errorMessage = error.response ? error.response.data.message : "Please try again later";
            this.$swal.fire("Error Purchasing Order", errorMessage, "error");
            // console.log(error.response.data.message);
          }
        })
        .render("#paypal");
      }
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AXGDhQQsjcwZym6y04KUASw4IDZ7v2F4ypSTrN30Rc8_0XtKH4fMbZAZsAhhjQrq0iAwb2_pTbQqUmR9&currency=MXN";
    script.addEventListener("load", this.loadPaypal);
    document.body.appendChild(script);
  },
};
</script>
