<template>
  <div>
    <!-- <h1>hi</h1> -->
    <h2>{{ thread.title }}</h2>
    <thread-com :posts="threadPosts"></thread-com>
    <post-editor @save="addposts"></post-editor>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useThreadsStore } from "../stores/threadsStore.js";
import { usePostsStore } from "../stores/postStore.js";
import ThreadCom from "../components/ThreadCom.vue";
import PostEditor from "../components/PostEditor.vue";
export default {
  components: { ThreadCom, PostEditor },
  props: {
    id: { required: true, type: String },
  },
  computed: {
    ...mapState(useThreadsStore, ["threads"]),
    thread() {
      return this.threads.find((thread) => thread.id === this.id);
    },
    ...mapState(usePostsStore, ["posts"]),
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id);
    },
  },
  methods: {
    ...mapActions(usePostsStore, ["createPost"]),
    addposts(eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id,
      };
      this.createPost(post);
    },
  },
};
</script>
<style scoped>
h2 {
  margin-inline: auto;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
