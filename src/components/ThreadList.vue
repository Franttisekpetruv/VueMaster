<template>
  <div class="Threads" v-for="thread in threads" :key="thread.id">
    <div class="Thread">
      <div class="ProfileHead">
        <p>
          <a>{{ userByPost(thread.userId).name }}</a>
        </p>
        <img class="userAv" :src="userByPost(thread.userId).avatar" alt="" />
      </div>
      <router-link :to="{ name: 'ThreadSite', params: { id: thread.id } }">
        {{ thread.title }}
      </router-link>
      <!-- <img :src="userByID(thread.userID).avatar" alt="" /> -->
      <p>{{ thread.posts.length }} Threads</p>
    </div>
  </div>
</template>
<script>
import sourceData from "@/data.json";
export default {
  props: { threads: { type: Array, required: true } },
  data() {
    return {
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
<style scoped>
.userAv {
  width: 50px;
  border-radius: 50px;
}
.Threads {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.ProfileHead {
  display: flex;
  margin-bottom: 10px;
}
.Thread {
  margin-top: 10px;
  background-color: lightgrey;
  border-radius: 10px;
  width: 80%;
  margin-inline: auto;
  padding: 5px;
}
</style>
