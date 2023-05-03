<template>
  <div class="my-4">
    <h1 class="my-4">Create Review</h1>
    <div class="row" style="background-color: rgba(0,0,0,.05); padding: 10px;">
      <div class="col-md-3" style="padding: 3px;">
        <img :src="require('./../assets/images/products/'+ product.id_product +'.jpg')" style="width: 100%;" alt=""/>
      </div>
      <div class="col-md-9">
        <h4 class="text-primary">{{ product.tx_name }}</h4>
        <h8>{{ product.tx_description }}</h8>
      </div>
    </div>

    <br/>
    <h4>General Score</h4>
    <star-rating 
      :star-size="30"
      @update:rating="rating = $event"
    ></star-rating>

    <br/>
    <h4>Add a Photo</h4>
    <p>Reviews with photos are often more helpful to other buyers.</p>

    <br/>
    <h4>Add a Comment</h4>
    <textarea :class="'form-control ' + errors.newReviewIsValid" v-model="newReview" placeholder="What did you like or dislike? For what are you using this product?" rows="10"/>
    <div class="invalid-feedback">{{ errors.newReviewError }}</div>

    <br/>
    <h4>Add your Country</h4>
    <input :class="'form-control col-md-6 col-lg-6 ' + errors.countryIsValid" v-model="country" placeholder="Mexico"/>
    <div class="invalid-feedback">{{ errors.countryError }}</div>

    <br/>
    <button 
      class="btn btn-success" 
      @click="addReview()"
      >
        Send Review
      </button>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  components: {
    StarRating
  },
  data() {
    return {
      product: null,
      country: '',
      newReview: '',
      rating: 0,
      errors: {
        countryError: '',
        newReviewError: '',
        newReviewIsValid: null,
        countryIsValid: null
      }
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
    addReview() {
      if(this.validate()) {
        this.$swal.fire({
          title: 'Add Review?',
          icon: 'info',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'Cancel',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            this.$axios.post('/reviews', {
              "country": this.country,
              "stars": this.rating,
              "description": this.newReview,
              "id_product": this.product.id_product
            })
            .then(() => {
              this.$swal.fire("Review Added", "", "success");
              this.$router.replace('/orders');
            })
            .catch(() => {
              // console.log(error.response.data.message);
              this.$swal.fire("Error Adding Review", "Please try again later", "error");
            });
          }
        });
      }
    },
    validate() {
      let isValid = true;

      this.errors.countryError = '';
      this.errors.newReviewError = '';
      this.errors.countryIsValid = null;
      this.errors.newReviewIsValid = null;

      if (this.country == '') {
        this.errors.countryIsValid = 'is-invalid';
        this.errors.countryError = 'Enter a country';
        isValid = false;
      }
      if (this.newReview == '') {
        this.errors.newReviewIsValid = 'is-invalid';
        this.errors.newReviewError = 'Enter a comment';
        isValid = false;
      }
      return isValid;
    }
  },
  created() {
    this.loadProduct();
  }
};
</script>
