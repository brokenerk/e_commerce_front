import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import { api } from './boot/axios';

const app = createApp(App);
app.config.globalProperties.$axios = api;
app.use(router);
app.use(store);
app.mount('#app');