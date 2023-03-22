<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item"><strong>Question:</strong> <span class="text-primary">{{ question.question }}</span></li>
      <li class="list-group-item" v-if="question.answer">
        <strong>Answer:</strong> {{ question.answer }} <br/>
        <span class="text-secondary">By {{ question.username }} on {{ question.answer_date }}</span>
      </li>
      <div v-else-if="isLoggedIn" class="input-group">
        <input class="form-control" v-model="newAnswer" placeholder="Write an answer..."/>
        <div class="input-group-append">
          <button class="btn btn-primary" @click="sendAnswer()">Answer</button>
        </div>
      </div>
    </ul>
    <br/>
  </div>
</template>

<script>
export default {
  props: ["question"],
  data() {
    return {
      newAnswer: null
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    sendAnswer() {
      this.$axios.put('/products/' + this.question.id_question, {
        "answer": this.newAnswer
      })
      .then(() => {
        this.$emit('loadProduct');
      })
      .catch(() => {
        this.$swal.fire("Error Answering the question", "Please try again later", "error");
      });
    }
  },
};
</script>
