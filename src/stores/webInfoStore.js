import { defineStore } from 'pinia';

export const useWebInfoStore = defineStore('webInfo', {
  state: () => ({
    siteTitle: "Akash's Vue 3 Website",
  }),
  persist: true
});
