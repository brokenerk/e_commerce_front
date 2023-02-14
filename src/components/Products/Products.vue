<template>
    <div>
    <h1 class="my-4">Products</h1>
        <div class="row">
            <product-card
                v-for="product in products"
                :key="product.id_product"
                :product="product"
            ></product-card>
        </div>
    </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    ProductCard
  },
  data() {
    return {
        products: [{
        id_product: 1,
        tx_name: "PlayStation 4 Slim",
        tx_description: "Incluye una consola PlayStation 4 Slim de 1 TB, un control inalámbrico DUALSHOCK 4, discos de Blu-ray de God of War, Horizon Zero Dawn Complete Edition, Shadow of the Colossus, y un cupón para PS Plus (suscripción de 3 meses).",
        ft_price: 6699.0,
        nu_stock: 5,
        ft_discount: 0.0,
        real_price: 16.0
      },
      {
        id_product: 1,
        tx_name: "PlayStation 4 Slim",
        tx_description: "Incluye una consola PlayStation 4 Slim de 1 TB, un control inalámbrico DUALSHOCK 4, discos de Blu-ray de God of War, Horizon Zero Dawn Complete Edition, Shadow of the Colossus, y un cupón para PS Plus (suscripción de 3 meses).",
        ft_price: 6699.0,
        nu_stock: 5,
        ft_discount: 0.0,
        real_price: 16.0
      },
      {
        id_product: 2,
        tx_name: "PlayStation 4 Slim",
        tx_description: "Incluye una consola PlayStation 4 Slim de 1 TB, un control inalámbrico DUALSHOCK 4, discos de Blu-ray de God of War, Horizon Zero Dawn Complete Edition, Shadow of the Colossus, y un cupón para PS Plus (suscripción de 3 meses).",
        ft_price: 6699.0,
        nu_stock: 5,
        ft_discount: 0.0,
        real_price: 16.0
      },]
    }
  }
};
</script>
