<template>
  <div>
    <stars-rating
      :stars="totalStars"
    ></stars-rating>

    <p>{{ totalReviews }} total reviews</p>

    <div class="row">
      <div class="col-lg-9 col-md-9">
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="'width:' + arrayStars[4] / totalReviews * 100 + '%'"></div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3">5 <i class="fa fa-star"></i></div>
    </div>
    <div class="row">
      <div class="col-lg-9 col-md-9">
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="'width:' + arrayStars[3] / totalReviews * 100 + '%'"></div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3">4 <i class="fa fa-star"></i></div>
    </div>
    <div class="row">
      <div class="col-lg-9 col-md-9">
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="'width:' + arrayStars[2] / totalReviews * 100 + '%'"></div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3">3 <i class="fa fa-star"></i></div>
    </div>
    <div class="row">
      <div class="col-lg-9 col-md-9">
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="'width:' + arrayStars[1] / totalReviews * 100 + '%'"></div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3">2 <i class="fa fa-star"></i></div>
    </div>
    <div class="row">
      <div class="col-lg-9 col-md-9">
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="'width:' + arrayStars[0] / totalReviews * 100 + '%'"></div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3">1 <i class="fa fa-star"></i></div>
    </div>
  </div>
</template>

<script>
import StarsRating from './StarsRating.vue';

export default {
  props: ["totalReviews", "totalStars", "arrayStars"],
  components: {
    StarsRating
  }
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
