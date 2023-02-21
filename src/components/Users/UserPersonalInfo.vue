<template>
  <div>
    <h3 class="my-4">Personal Info</h3>
    
    <div class="form-group row">
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Name</label>
        <!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txName" name="model.name" placeholder="Juan"/> -->
        <!-- <s:fielderror fieldName="model.name" class="text-danger"/> -->
        <input class="form-control" @input="setUserData()" v-model="user.tx_first_name" placeholder="John"/>
      </div>
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Last Name</label>
        <!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txLastName" name="model.lastName" placeholder="Gonzalez"/> -->
        <!-- <s:fielderror fieldName="model.lastName" class="text-danger"/> -->
        <input class="form-control" @input="setUserData()" v-model="user.tx_last_name_a" placeholder="Doe"/>
      </div>
    </div>

    <div class="form-group row">
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Second Last Name</label>
        <!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txSecondLastName" name="model.secondLastName" placeholder="Ramirez"/> -->
        <!-- <s:fielderror fieldName="model.secondLastName" class="text-danger"/> -->
        <input class="form-control" @input="setUserData()" v-model="user.tx_last_name_b" placeholder="Connor"/>
      </div>
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Email</label>
        <!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txLogin" name="model.login" placeholder="goku777@gmail.com"/> -->
        <!-- <s:fielderror fieldName="model.login" class="text-danger"/> -->
        <input class="form-control" @input="setUserData()" v-model="user.tx_login" placeholder="username@gmail.com"/>
      </div>
    </div>

    <div class="form-group row">
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Password</label>
        <!-- <s:password cssClass="form-control" cssErrorClass="is-invalid" id="txPassword" name="model.password" placeholder="*******"/> -->
        <!-- <s:fielderror fieldName="model.password" class="text-danger"/> -->
        <input type="password" class="form-control" @input="setUserData()" v-model="user.tx_password" placeholder="*******"/>
      </div>
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Confirm Password</label>
        <!-- <s:password cssClass="form-control" cssErrorClass="is-invalid" id="txConfirmPassword" name="confirmPassword" placeholder="*******"/> -->
        <!-- <s:fielderror fieldName="confirmPassword" class="text-danger"/> -->
        <input type="password" class="form-control" @input="setUserData()" v-model="confirmPassword" placeholder="*******"/>
      </div>
    </div>

    <h3 class="my-4">Address</h3>

    <div class="form-group row">
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Street</label>
        <!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txStreet" name="model.street" placeholder="Calle El Solecito 231"/> -->
        <!-- <s:fielderror fieldName="model.street" class="text-danger"/> -->
        <input class="form-control" @input="setAddressData()" v-model="user.tx_street" placeholder="2768 Buck Drive"/>
      </div>
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">City</label>
        <!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txCity" name="model.city" placeholder="Naucalpan de Juarez"/> -->
        <!-- <s:fielderror fieldName="model.city" class="text-danger"/> -->
        <input class="form-control" @input="setAddressData()" v-model="user.tx_city" placeholder="Montpelier"/>
      </div>
    </div>

    <div class="form-group row">
      <div class="col col-lg-4">
        <label for="" class="text-dark">State</label>
        <!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txState" name="model.state" placeholder="Edo. de Mexico"/> -->
        <!-- <s:fielderror fieldName="model.state" class="text-danger"/> -->
        <input class="form-control" @input="setAddressData()" v-model="user.tx_state" placeholder="Vermont"/>
      </div>
      <div class="col col-lg-4">
        <label for="" class="text-dark">Zip Code</label>
        <!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txZipCode" name="model.zipCode" placeholder="54040"/> -->
        <!-- <s:fielderror fieldName="model.zipCode" class="text-danger"/> -->
        <input class="form-control" @input="setAddressData()" v-model="user.tx_zipcode" placeholder="05602"/>
      </div>
      <div class="col-md-6 col-lg-4">
        <label for="" class="text-dark">Telephone</label>
        <!-- <s:textfield cssClass="form-control" cssErrorClass="is-invalid" id="txTelephone" name="model.telephone" placeholder="55-55-55-55-55"/> -->
        <!-- <s:fielderror fieldName="model.telephone" class="text-danger"/> -->
        <input class="form-control" @input="setAddressData()" v-model="user.tx_telephone" placeholder="802-854-5235"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    "loadUser"
  ],
  data() {
    return {
      user: {
        tx_first_name: '',
        tx_last_name_a: '',
        tx_last_name_b: '',
        tx_login: '',
        tx_password: '',
        tx_street: '',
        tx_city: '',
        tx_state: '',
        tx_zipcode: '',
        tx_telephone: ''
      },
      confirmPassword: '',
    }
  },
  methods: {
    setUserData() {
      this.$emit('setUserData', { "user": this.user, "confirmPassword": this.confirmPassword })
    },
    getUser() {
      this.$axios.get('/users')
      .then((response) => {
        this.user = response.data.user;
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
    }
  },
  created() {
    if (this.loadUser == true)
      this.getUser();
  }
};
</script>
