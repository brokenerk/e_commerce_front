import { createApp } from 'vue';
import App from './App.vue';
import { api } from './boot/axios';
import router from './router.js';
import store from './store.js';

const app = createApp(App);
app.config.globalProperties.$axios = api;
app.use(router);
app.use(store);
app.mount('#app');