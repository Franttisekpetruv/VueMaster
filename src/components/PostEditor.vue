<template lang="">
  <div>
    <form @submit.prevent="save" class="formsubmit">
      <textarea
        v-model="text"
        name="text"
        clas="postText"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button>Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    data() {
      return {
        text: "",
      };
    },
    save() {
      const postID = "gggg" + Math.random();
      const post = {
        id: postID,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
      };
      this.$emit("save", { post });
      this.text = "";
    },
  },
};
</script>
<style scoped>
.formsubmit {
  /* background-color: red; */
  /* width: 1900px; */
  margin-top: 10px;
  text-align: center;
}
.postText {
  background-color: red;
  width: 2000px;
}
</style>
