<template lang="">
  <h2>{{ forum.name }}</h2>
  <!-- <h3>{{ forum.description }}</h3> -->
  <div>
    <thread-list :threads="threads"></thread-list>
  </div>
</template>
<script>
import ThreadList from "../components/ThreadList.vue";
import sourceData from "../data.json";
export default {
  // data(){
  //     return {
  //    sourceData,
  // };
  // },
  components: { ThreadList },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    forum() {
      return sourceData.forums.find((forum) => forum.id === this.id);
    },
    threads() {
      return sourceData.threads.filter((thread) => thread.forumId === this.id);
    },
  },
};
</script>
<style lang=""></style>
