import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: ["Vue Portfolio", "AI Stock Predictor", "Heart Disease Classifier"],
    clickCount: 0, // Counter state
  }),
  actions: {
    addProject(projectName) {
      this.projects.push(projectName);
    },
    clearProjects() {
      this.projects = [];
    },
    incrementCounter() {
      this.clickCount++;
    }
  },
  persist: true
});
