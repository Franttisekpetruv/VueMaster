<template lang="">
  <h1>{{ userAuth.name }}</h1>
  <h3>{{ thread }}</h3>
  <threadlist></threadlist>
</template>
<script setup>
import { userStore } from "../stores/userStore.js";
import threadlist from "../components/ThreadList.vue";
const userAuth = userStore();
</script>
<script>
export default {
  computed:{}
};
</script>
<style lang=""></style>
