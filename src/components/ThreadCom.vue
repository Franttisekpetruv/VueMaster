<template lang="">
  <div>
    <!-- <h1>hi</h1> -->
    <div v-for="post in posts" :key="post.id">
      <div class="response">
        <a href="#">{{ userByPost(post.userId).name }}</a>
        <p>
          {{ post.text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import sourceData from "../data.json";
export default {
  data() {
    return {
      users: sourceData.users,
    };
  },
  props: {
    posts: {
      required: true,
      type: Array,
    },
  },
  methods: {
    userByPost(userID) {
      return this.users.find((p) => p.id === userID);
    },
  },
};
</script>
<style scoped>
.response {
  background-color: lightblue;
  margin-inline: auto;
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}
</style>
