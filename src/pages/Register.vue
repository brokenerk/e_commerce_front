<template>
<div>
  <h1 class="my-4">Register</h1>
	<!-- <s:actionerror/> -->
	
  <user-personal-info
    @setUserData="setUserData($event)"
  ></user-personal-info>

  <user-address
    @setAddressData="setAddressData($event)"  
  ></user-address>
	
  <div class="row">
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

</div>
</template>

<script>
import UserAddress from '../components/Users/UserAddress.vue';
import UserPersonalInfo from '../components/Users/UserPersonalInfo.vue';

export default {
  components: {
    UserPersonalInfo,
    UserAddress
  },
  data() {
    return {
      user: {},
      confirmPassword: '',
      address: {}
    }
  },
  methods: {
    setUserData(payload) {
      this.confirmPassword = payload.confirmPassword;
      this.user = payload.user;
    },
    setAddressData(address) {
      this.address = address;
    },
    registerUser() {
      let newUser = Object.assign({}, this.user, this.address);

      this.$axios.post('/users', newUser)
      .then(() => {
        this.$router.replace('/login');
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
    }
  }
};
</script>
