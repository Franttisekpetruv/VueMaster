import { defineStore } from "pinia";
import data from "@/data.json";
export const useCategoriesStore = defineStore("categoriesStore", {
  state: () => {
    return { categories: data.categories };
  },
  actions: {
    async fill() {
      this.products = (await import("@/data.json")).default;
    },
  },
  // getters
});
