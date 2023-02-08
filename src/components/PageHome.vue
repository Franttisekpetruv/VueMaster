<template>
  <div>hi</div>
  <!-- <div v-for="thread in threads">{{ categories.title }}</div> -->
  <div>{{ sourceData }}</div>
</template>
<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      sourceData,
      //   threads: sourceData.categories,
    };
  },
};
</script>
<style scoped></style>
