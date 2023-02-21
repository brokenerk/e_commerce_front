<template>
  <div>
    <h3 class="my-4">Address</h3>

		<div class="form-group row">
			<div class="col-lg-6 col-md-6">
				<label for="" class="text-dark">Street</label>
				<!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txStreet" name="model.street" placeholder="Calle El Solecito 231"/> -->
				<!-- <s:fielderror fieldName="model.street" class="text-danger"/> -->
				<input class="form-control" @input="setAddressData()" v-model="address.tx_street" placeholder="2768 Buck Drive"/>
			</div>
			<div class="col-lg-6 col-md-6">
				<label for="" class="text-dark">City</label>
				<!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txCity" name="model.city" placeholder="Naucalpan de Juarez"/> -->
				<!-- <s:fielderror fieldName="model.city" class="text-danger"/> -->
				<input class="form-control" @input="setAddressData()" v-model="address.tx_city" placeholder="Montpelier"/>
			</div>
		</div>

		<div class="form-group row">
			<div class="col col-lg-4">
				<label for="" class="text-dark">State</label>
				<!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txState" name="model.state" placeholder="Edo. de Mexico"/> -->
				<!-- <s:fielderror fieldName="model.state" class="text-danger"/> -->
				<input class="form-control" @input="setAddressData()" v-model="address.tx_state" placeholder="Vermont"/>
			</div>
			<div class="col col-lg-4">
				<label for="" class="text-dark">Zip Code</label>
				<!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txZipCode" name="model.zipCode" placeholder="54040"/> -->
				<!-- <s:fielderror fieldName="model.zipCode" class="text-danger"/> -->
				<input class="form-control" @input="setAddressData()" v-model="address.tx_zipcode" placeholder="05602"/>
			</div>
			<div class="col-md-6 col-lg-4">
				<label for="" class="text-dark">Telephone</label>
				<!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txTelephone" name="model.telephone" placeholder="55-55-55-55-55"/> -->
				<!-- <s:fielderror fieldName="model.telephone" class="text-danger"/> -->
				<input class="form-control" @input="setAddressData()" v-model="address.tx_telephone" placeholder="802-854-5235"/>
			</div>
		</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      address: {
        tx_street: '',
        tx_city: '',
        tx_state: '',
        tx_zipcode: '',
        tx_telephone: ''
      }
    }
  },
  methods: {
    setAddressData() {
      this.$emit('setAddressData', this.address)
    }
  }
};
</script>
