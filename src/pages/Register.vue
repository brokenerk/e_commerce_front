<template>
<div>
  <h1 class="my-4">Register</h1>
  <user-personal-info
    :loadUser="false"
  ></user-personal-info>
</div>
</template>

<script>
import UserPersonalInfo from '../components/Users/UserPersonalInfo.vue';

export default {
  components: {
    UserPersonalInfo
  }
};
</script>
