<template lang="">
  <forum-list
    v-for="cat in cats"
    :key="cat.id"
    :forums="Catforum(cat)"
    :catname="cat.name"
  >
    {{ cat.name }}
  </forum-list>
  <!-- <router-link :to="{ name: 'Cat', params: { id: cat.id } }"> -->
  <!-- </router-link> -->

  <!-- <h1>{{ cat.name }}</h1> -->
  <!-- <forum-list :forums="forums"></forum-list> -->
  <!-- </div> -->
</template>
<script>
import ForumList from "../components/ForumList.vue";
import sourceData from "../data.json";
export default {
  props: {
    // forum: { required: true, type: Array },
    cats: { required: true, type: Array },
  },
  components: {
    ForumList,
  },
  methods: {
    Catforum(cat) {
      return sourceData.forums.filter((forum) => forum.categoryId === cat.id);
    },
  },
};
</script>

<style lang=""></style>
