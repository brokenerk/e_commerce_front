<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="text-secondary">By {{ review.username }}</span>
        <stars-rating
          :stars="review.stars"
        ></stars-rating>
        <small>From {{ review.country }} on {{ review.creation_date }}</small>
        <p>{{ review.description }}</p>
      </li>
    </ul>
    <br/>
  </div>
</template>

<script>
import StarsRating from './StarsRating.vue';

export default {
  props: ["review"],
  components: {
    StarsRating
  }
};
</script>
