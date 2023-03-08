<template>
  <h1>Welcome Babe</h1>
  <!-- <forum :forums="forums"></forum> -->
  <cat-list :cats="categories"></cat-list>
</template>
<script setup>
// import ThreadList from "../components/ThreadList.vue";
import CatList from "../views/catlist.vue";
// import ForumList from "../components/ForumList.vue";
import { useCategoriesStore } from "../stores/CategoriesStore.js";
import { storeToRefs } from "pinia";
const { categories } = storeToRefs(useCategoriesStore());
</script>
<style></style>
