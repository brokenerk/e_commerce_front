<template>
  <li class="nav-item">
    <router-link class="nav-link text-white" :to="to" @click="store.commit('setSearchText', '')">
      {{ caption }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["to", "caption"],
};
</script>