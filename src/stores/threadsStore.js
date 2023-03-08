import { defineStore } from "pinia";
import data from "@/data.json";
export const useThreadsStore = defineStore("threadStore", {
  state: () => {
    return { threads: data.threads };
  },

  // getters
});
  