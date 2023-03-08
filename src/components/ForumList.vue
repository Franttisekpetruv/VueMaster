<template lang="">
  <div class="forum-page">
    <h2>{{ catname }}</h2>
    <div class="forum-list">
      <div v-for="forum in forums" :key="forum.id" class="forum">
        <router-link
          :to="{ name: 'Forum', params: { id: forum.id } }"
          style="text-decoration: none"
          class="heading"
        >
          {{ forum.name }}
        </router-link>
        <p>
          <em> {{ forum.description }}</em>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    forums: { required: true, type: Array },
    // cats: { required: true },
    catname: { required: true, type: String },
  },
};
</script>

<style scoped>
.forum {
  background-color: lightgrey;
  padding: 10px;
  margin-block: 20px;
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  filter: drop-shadow(0 0 0.4rem grey);
}
.forum-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.forum-page {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
}
.heading {
  font-size: 20px;
  color: black;
  background-color: darkgray;
  padding: 4px 16px;
  border-radius: 10px;
}
.heading:hover {
  background-color: rgb(190, 190, 190);
  transition-duration: 0.1s;
}
</style>
