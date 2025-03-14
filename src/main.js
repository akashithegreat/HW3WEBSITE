import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import { NConfigProvider } from 'naive-ui';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);

// Force Naive UI Light Mode
app.component('NConfigProvider', NConfigProvider);
app.mount('#app');

