<template>
<div>
  <h1 class="my-4">My Profile</h1>
  <user-personal-info
    :loadUser="true"
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
