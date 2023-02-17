<template>
  <div clss='row'>
    <h1 class="my-4">Login</h1>

    <!-- <s:actionerror/> -->
    
      
      <div class="row">
        <input class="input100" type="text" v-model="username" placeholder="Username"/>
        <!-- <s:textfield cssClass="input100" cssErrorClass="is-invalid" id="txUsername" name="username" placeholder="Email"/>
        <s:fielderror fieldName="username" style="color: white; font-weight: bold;"/> -->
      </div>

      <div class="row">
        <input class="input100" type="password" v-model="password" placeholder="Password"/>
        <!-- <s:password id="txPassword" name="password" cssClass="input100" cssErrorClass="is-invalid" placeholder="Password"/>
        <s:fielderror fieldName="password" style="color: white; font-weight: bold;"/> -->
      </div>

      <!-- <s:hidden id="IdSel" name="idSel"/> -->

      <div class="row">
        <button class="btn btn-info" @click="login()">Sign In</button>
      </div>

    <br/>	
    <div class="text-center row">
      <router-link class="txt1" to="/register">
        Create new account
      </router-link>
    </div>

    <div class="text-center row">
      <router-link class="txt1" to="/products">
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
      password: ''
    }
  },
  methods: {
    login() {
      this.$axios.post('/login', {
        'username': this.username,
        'password': this.password
      })
      .then((response) => {
        this.$store.dispatch('auth', response.data.token);
        const redirectUrl = '/' + (this.$route.query.redirect || 'products');
        this.$router.replace(redirectUrl);
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
    }
  },
};
</script>
