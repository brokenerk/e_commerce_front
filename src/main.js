import { createApp } from 'vue';
import App from './App.vue';
import { api } from './boot/axios';
import router from './router.js';

const app = createApp(App);
app.config.globalProperties.$axios = api;
app.use(router);
app.mount('#app');