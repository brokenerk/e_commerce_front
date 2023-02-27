<template>
  <footer class="py-4 bg-dark">
    <div class="container-fluid">
      <p class="m-0 text-center text-white">
        Developed by Enrique Ramos - Copyright {{ actualYear }}
      </p>
      <p class="m-0 text-center text-white">
        Powered by
      </p>
      <p class="m-0 text-center">
        <img src="./../../assets/images/postgresql.png" />
        <img src="./../../assets/images/python.png" />
        <img src="./../../assets/images/vuejs.png" />
        <img src="./../../assets/images/bootstrap.png" />
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      actualYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
img {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 3px 5px 0px 5px;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>