<template>
  <div>
    <h3 class="my-4">Personal Info</h3>
    
    <div class="form-group row">
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Name</label>
        <input :class="'form-control ' + errors.nameIsValid" v-model="user.tx_first_name" placeholder="John"/>
        <div class="invalid-feedback">{{ errors.nameError }}</div>
      </div>
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Last Name</label>
        <input :class="'form-control ' + errors.lastNameIsValid" v-model="user.tx_last_name_a" placeholder="Doe"/>
        <div class="invalid-feedback">{{ errors.lastNameError }}</div>
      </div>
    </div>

    <div class="form-group row">
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Second Last Name</label>
        <input :class="'form-control ' + errors.secondNameIsValid" v-model="user.tx_last_name_b" placeholder="Connor"/>
        <div class="invalid-feedback">{{ errors.secondNameError }}</div>
      </div>
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Email</label>
        <input :class="'form-control ' + errors.emailIsValid" v-model="user.tx_login" placeholder="username@gmail.com"/>
        <small class="form-text text-muted">Must be a valid email</small>
        <div class="invalid-feedback">{{ errors.emailError }}</div>
      </div>
    </div>

    <div class="form-group row">
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Password</label>
        <input type="password" :class="'form-control ' + errors.passwordIsValid" v-model="user.tx_password" placeholder="*******"/>
        <div class="invalid-feedback">{{ errors.passwordError }}</div>
      </div>
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Confirm Password</label>
        <input type="password" :class="'form-control ' + errors.confirmPasswordIsValid" v-model="confirmPassword" placeholder="*******"/>
        <small class="form-text text-muted">Passwords must match</small>
      </div>
    </div>

    <h3 class="my-4">Address</h3>

    <div class="form-group row">
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Street</label>
        <input :class="'form-control ' + errors.streetIsValid" v-model="user.tx_street" placeholder="2768 Buck Drive"/>
        <div class="invalid-feedback">{{ errors.streetError }}</div>
      </div>
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">City</label>
        <input :class="'form-control ' + errors.cityIsValid" v-model="user.tx_city" placeholder="Montpelier"/>
        <div class="invalid-feedback">{{ errors.cityError }}</div>
      </div>
    </div>

    <div class="form-group row">
      <div class="col col-lg-4">
        <label for="" class="text-dark">State</label>
        <input :class="'form-control ' + errors.stateIsValid" v-model="user.tx_state" placeholder="Vermont"/>
        <div class="invalid-feedback">{{ errors.stateError }}</div>
      </div>
      <div class="col col-lg-4">
        <label for="" class="text-dark">Zip Code</label>
        <input :class="'form-control ' + errors.zipcodeIsValid" v-model="user.tx_zipcode" placeholder="05602"/>
        <div class="invalid-feedback">{{ errors.zipcodeError }}</div>
      </div>
      <div class="col-md-6 col-lg-4">
        <label for="" class="text-dark">Telephone</label>
        <input :class="'form-control ' + errors.telephoneIsValid" v-model="user.tx_telephone" placeholder="802-854-5235"/>
        <div class="invalid-feedback">{{ errors.telephoneError }}</div>
      </div>
    </div>

    <br/>
    <div class="form-group row" v-if="!loadUser">
      <div class="col-md-2 col-lg-2">
        <button 
          class="btn btn-success"
          @click="registerUser()"
        >
          Sign Up
        </button>
      </div>
      <div class="col-md-2 col-lg-5">
        <router-link class="btn btn-danger" to="/products">Go back to products</router-link>
      </div>
      <div class="col-md-2 col-lg-5">
        <router-link class="btn btn-info" to="/login">Already have an account? Log In</router-link>
      </div>
    </div>

    <div class="form-group row" v-if="loadUser">
      <div class="col-md-2 col-lg-2">
        <router-link class="btn btn-info" to="/orders">My Orders</router-link>
      </div>
      <div class="col-md-4 col-lg-4">
        <button 
          class="btn btn-success"
          @click="updateUser()"
        >
          Save Changes
        </button>
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
      errors: {
        nameError: '',
        lastNameError: '',
        secondNameError: '',
        emailError: '',
        passwordError: '',
        streetError: '',
        cityError: '',
        stateError: '',
        zipcodeError: '',
        telephoneError: '',
        nameIsValid: null,
        lastNameIsValid: null,
        secondNameIsValid: null,
        emailIsValid: null,
        passwordIsValid: null,
        confirmPasswordIsValid: null,
        streetIsValid: null,
        cityIsValid: null,
        stateIsValid: null,
        zipcodeIsValid: null,
        telephoneIsValid: null
      }
    }
  },
  methods: {
    getUser() {
      this.$axios.get('/users')
      .then((response) => {
        this.user = response.data.user;
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
    },
    registerUser() {
      if(this.validate()) {
        this.$axios.post('/users', this.user)
        .then(() => {
          this.$router.replace('/login');
        })
        .catch((error) => {
          alert(error.response.data.message)
        });
        }
    },
    updateUser() {
      if(this.validate()) {
        this.$axios.put('/users', JSON.stringify(this.user))
        .then(() => {
          alert("Changes saved!")
        })
        .catch((error) => {
          alert(error.response.data.message)
        });
      }
    },
    validate() {
      this.errors.nameError = '';
      this.errors.lastNameError = '';
      this.errors.secondNameError = '';
      this.errors.emailError = '';
      this.errors.passwordError = '';
      this.errors.confirmPasswordError = '';
      this.errors.streetError = '';
      this.errors.cityError = '';
      this.errors.stateError = '';
      this.errors.zipcodeError = '';
      this.errors.telephoneError = '';
      this.errors.nameIsValid = null;
      this.errors.lastNameIsValid = null;
      this.errors.secondNameIsValid = null;
      this.errors.emailIsValid = null;
      this.errors.passwordIsValid = null;
      this.errors.confirmPasswordIsValid = null;
      this.errors.streetIsValid = null;
      this.errors.cityIsValid = null;
      this.errors.stateIsValid = null;
      this.errors.zipcodeIsValid = null;
      this.errors.telephoneIsValid = null;

      let isValid = true;

      if (this.user.tx_first_name == '') {
        this.errors.nameIsValid = 'is-invalid';
        this.errors.nameError = 'Enter a name';
        isValid = false;
      }
      if (this.user.tx_last_name_a == '') {
        this.errors.lastNameIsValid = 'is-invalid';
        this.errors.lastNameError = 'Enter a last name';
        isValid = false;
      }
      if (this.user.tx_last_name_b == '') {
        this.errors.secondNameIsValid = 'is-invalid';
        this.errors.secondNameError = 'Enter a second last name';
        isValid = false;
      }
      if (!this.validateEmail(this.user.tx_login)) {
        this.errors.emailIsValid = 'is-invalid';
        this.errors.emailError = 'Enter a valid email';
        isValid = false;
      }
      if (this.user.tx_password == '') {
        this.errors.passwordIsValid = 'is-invalid';
        this.errors.passwordError = 'Enter a password';
        isValid = false;
      }
      if (this.user.tx_password == '') {
        this.errors.passwordIsValid = 'is-invalid';
        this.errors.passwordError = 'Enter a password';
        isValid = false;
      }
      if (this.user.tx_password != this.confirmPassword) {
        this.errors.passwordIsValid = 'is-invalid';
        this.errors.confirmPasswordIsValid = 'is-invalid';
        this.errors.passwordError = "Passwords don't match";
        isValid = false;
      }
      if (this.user.tx_street == '') {
        this.errors.streetIsValid = 'is-invalid';
        this.errors.streetError = 'Enter a street';
        isValid = false;
      }
      if (this.user.tx_city == '') {
        this.errors.cityIsValid = 'is-invalid';
        this.errors.cityError = 'Enter a city';
        isValid = false;
      }
      if (this.user.tx_state == '') {
        this.errors.stateIsValid = 'is-invalid';
        this.errors.stateError = 'Enter a state';
        isValid = false;
      }
      if (this.user.tx_zipcode == '') {
        this.errors.zipcodeIsValid = 'is-invalid';
        this.errors.zipcodeError = 'Enter a zip code';
        isValid = false;
      }
      if (this.user.tx_telephone == '') {
        this.errors.telephoneIsValid = 'is-invalid';
        this.errors.telephoneError = 'Enter a telephone';
        isValid = false;
      }
      return isValid;
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  created() {
    if (this.loadUser == true)
      this.getUser();
  }
};
</script>
