<template>
  <div class="my-4">
    <h1 class="my-4 text-center">Login</h1>

    <div class="form-group row">
      <div class="col-lg-3 col-md-3"></div>
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Username</label>
        <input :class="'form-control ' + usernameIsValid" v-model="username" placeholder="Username"/>
        <div class="invalid-feedback">{{ usernameError }}</div>
      </div>
    </div>

    <div class="form-group row">
      <div class="col-lg-3 col-md-3"></div>
      <div class="col-lg-6 col-md-6">
        <label for="" class="text-dark">Password</label>
        <input :class="'form-control ' + passwordIsValid" type="password" v-model="password" placeholder="Password"/>
        <div class="invalid-feedback">{{ passwordError }}</div>
      </div>
    </div>

    <div class="form-group text-center">
        <button class="btn btn-info" @click="login()">Sign In</button>
    </div>

    <br/>
    <div class="form-group text-center">
      <router-link class="btn btn-success" to="/register">
        Create new account
      </router-link>
    </div>

    <div class="form-group text-center">
      <router-link class="btn btn-secondary" to="/products">
        Go back to products
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      username: '',
      password: '',
      usernameIsValid: null,
      usernameError: '',
      passwordIsValid: null,
      passwordError: ''
    }
  },
  methods: {
    login() {
      if (this.validate()) {
        this.$axios.post('/login', {
          'username': this.username,
          'password': this.password
        })
        .then((response) => {
          this.$store.dispatch('auth', response.data.token);
          
          if (this.$route.redirectedFrom === undefined)
            this.$router.replace('/products');
          else
            this.$router.replace(this.$route.redirectedFrom.fullPath)
        })
        .catch((error) => {
          const errorMessage = error.response ? error.response.data.message : "Please try again later";

          if (errorMessage == 'Password is wrong') {
            this.passwordIsValid = 'is-invalid';
            this.passwordError = errorMessage;
          }
          else if (errorMessage == 'Username is wrong') {
            this.usernameIsValid = 'is-invalid';
            this.usernameError = errorMessage;
          }
          else
            this.$swal.fire("Login Error", errorMessage, "error");

        })
      }
    },
    validate() {
      this.usernameIsValid = '';
      this.usernameError = '';
      this.passwordIsValid = '';
      this.passwordError = '';
      let isValid = true;

      if (this.username == '') {
        this.usernameIsValid = 'is-invalid';
        this.usernameError = 'Enter a valid username';
        isValid = false;
      }

      if (this.password == '') {
        this.passwordIsValid = 'is-invalid';
        this.passwordError = 'Enter a password';
        isValid = false;
      }
      return isValid;
    }
  },
};
</script>
