<template>
  <div>hi</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div v-for="postId in thread.posts" :key="postId">
      <p>{{ postByID(postId).text }}</p>
      <p>
        {{ userByPost(postByID(postId).userId).name }}
      </p>
    </div>
  </div>
</template>
<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  methods: {
    postByID(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userByPost(userID) {
      return this.users.find((p) => p.id === userID);
    },
  },
};
</script>
<style></style>
