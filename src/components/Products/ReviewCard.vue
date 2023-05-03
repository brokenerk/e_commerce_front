<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="text-secondary">By {{ review.username }}</span>
        <star-rating 
          :star-size="21" 
          :rating="review.stars" 
          :read-only="true"
          :increment="0.5"
        ></star-rating>
        <small>From {{ review.country }} on {{ review.creation_date }}</small>
        <p>{{ review.description }}</p>
      </li>
    </ul>
    <br/>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  props: ["review"],
  components: {
    StarRating
  }
};
</script>
