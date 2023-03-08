<script>
import theNavBar from "./components/theNavBar.vue";
export default {
  name: "App",
  components: { theNavBar },
};
</script>

<template>
  <theNavBar></theNavBar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>

</style>
