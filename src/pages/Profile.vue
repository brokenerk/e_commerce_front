<template>
<div>
  <h1 class="my-4">My Profile</h1>
	
  <user-personal-info
    @setUserData="setUserData($event)"
    :loadUser="true"
  ></user-personal-info>
	
  <div class="row">
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
import UserPersonalInfo from '../components/Users/UserPersonalInfo.vue';

export default {
  components: {
    UserPersonalInfo
  },
  data() {
    return {
      user: null,
      confirmPassword: ''
    }
  },
  methods: {
    setUserData(payload) {
      this.confirmPassword = payload.confirmPassword;
      this.user = payload.user;
    },
    updateUser() {
      this.$axios.put('/users', JSON.stringify(this.user))
      .then(() => {
        alert("Changes saved!")
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
    }
  },
};
</script>
