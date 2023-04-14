<template>
  <div class="ratings">
    <h8> {{ stars }} / 5 </h8>
    <i 
      class="fa fa-star rating-color"
      v-for="i in stars"
      :key="i"
    ></i>
    <i 
      class="fa fa-star"
      v-for="i in 5-stars"
      :key="i"
    ></i>
  </div>
</template>

<script>
export default {
  props: ["stars"]
};
</script>

<style scoped>
  .rating-color {
    color: #fbc634 !important;
  }
  .ratings {
    margin-right: 10px;
  }
  .ratings i {
    color: #cecece;
    font-size: 24px;
  }
</style>
