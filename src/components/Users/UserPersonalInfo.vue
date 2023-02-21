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
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {
        tx_first_name: '',
        tx_last_name_a: '',
        tx_last_name_b: '',
        tx_login: '',
        tx_password: '',
      },
      confirmPassword: '',
    }
  },
  methods: {
    setUserData() {
      this.$emit('setUserData', { "user": this.user, "confirmPassword": this.confirmPassword })
    }
  }
};
</script>
