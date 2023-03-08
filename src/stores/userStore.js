import { defineStore } from "pinia";
import data from "../data.json";
export const userStore = defineStore("userStore", {
  state: () => ({
    authID: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3",
    users: data.users,
  }),
  getters: {
    authUser: (state) => state.users.find((user) => user.id === state.authID),
  },
});
