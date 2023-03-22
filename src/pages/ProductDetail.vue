<template>
  <div class="my-4" v-if="product">
    <div class="row">
      <div class="col-md-6">
        <br/>
        <img :src="require('./../assets/images/products/'+ product.id_product +'.jpg')" style="width: 100%;" alt=""/>
      </div>
      <div class="col-md-6">
        <br/><br/>
        <h4 class="text-primary">
          {{ product.tx_name }}
        </h4>
        <h8 class="text-danger" v-if="product.ft_discount != 0">
          {{ product.ft_discount }}% OFF
        </h8>
        <h4>${{ product.real_price }}</h4>
        <p class="text-secondary" v-if="product.ft_discount != 0">${{ product.ft_price }}</p>
        <h8>{{ product.tx_description }}</h8>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-center">
        <br/>
        <stars-rating
          :stars="product.stars"
        ></stars-rating>
      </div>
      <div class="col-md-6">
        <button class="btn btn-warning buy-button" @click="addToCart(product.id_product, false)">Add to Cart</button>
        <button class="btn btn-dark buy-button" @click="buyNow(product.id_product)">Buy Now</button>
        <button class="btn btn-info buy-button" @click="addToWishlist(product.id_product)">Add to Wishlist</button>
      </div>
    </div>

    <br/><br/>
    <h4>Questions</h4>
    <div class="input-group">
      <input class="form-control" v-model="newQuestion" placeholder="Make a question..."/>
      <div class="input-group-append">
        <button class="btn btn-success" @click="sendQuestion()">Send</button>
      </div>
    </div>
    <br/>
    <question-card
      v-for="question in product.questions"
      :key="question.id_question"
      :question="question"
      @loadProduct="loadProduct()"
    ></question-card>

    <br/><br/>
    <h4>Reviews</h4>

  </div>
</template>

<script>
import QuestionCard from '../components/Products/QuestionCard.vue';
import StarsRating from '../components/Products/StarsRating.vue';

export default {
  components: {
    StarsRating,
    QuestionCard
  },
  data() {
    return {
      product: null,
      newQuestion: null
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    loadProduct() {
      this.product = null;
      this.$axios.get('/products/' + this.$route.params.id)
      .then((response) => {
        this.product = response.data.product;
      })
      .catch(() => {
        this.$swal.fire("Error Loading Product", "Please try again later", "error");
      });
    },
    sendQuestion() {
      this.$axios.post('/products/' + this.$route.params.id, {
        "question": this.newQuestion
      })
      .then(() => {
        this.loadProduct();
      })
      .catch(() => {
        this.$swal.fire("Error Adding Question", "Please try again later", "error");
      });
    },
    buyNow(idProduct) {
      if (!this.isLoggedIn) {
        this.$router.replace('/login');
      }
      else {
        this.addToCart(idProduct, true);
      }
    },
    addToCart(idProduct, buyNow) {
      if (!this.isLoggedIn) {
        this.$router.replace('/login');
      }
      else {
        this.$axios.post('/cart', {
          "id_product": idProduct
        })
        .then(() => {
          if (!buyNow)
            this.$router.replace('/cart');
          else
            this.$router.replace('/buy');
        })
        .catch((error) => {
          // console.log(error.response.data.message);
          const errorMessage = error.response ? error.response.data.message : "Please try again later";
          this.$swal.fire("Error Adding Product", errorMessage, "error");
        });
      }
    },
    async addToWishlist(idProduct) {
      if (!this.isLoggedIn) {
        this.$router.replace('/login');
      }
      else {
        try {
          const response = await this.$axios.post('/wishlist', {
            "id_product": idProduct
          });
          this.$swal.fire(response.data.message, "", "info");
        }
        catch(e) {
          // console.log(e);
          this.$swal.fire("Error Adding Product", "Please try again later", "error");
        }
      }
    },
  },
  created() {
    this.loadProduct();
  }
};
</script>

<style scoped>
  .buy-button {
    margin: 4px;
    width:100%;
    display:block;
  }
</style>
