import { defineStore } from "pinia";
import data from "@/data.json";
import { useThreadsStore } from "./threadsStore";
export const usePostsStore = defineStore("postsStore", {
  state: () => {
    return { posts: data.posts };
  },
  getters: {},
  actions: {
    createPost(post) {
      post.id = "ggqq" + Math.random();
      this.posts.push(post);

      const thread = useThreadsStore().threads.find(
        (thread) => thread.id === post.threadId
      );
      thread.posts.push(post.id);
    },
  },
});
