import { createApp } from 'vue';
import App from './App.vue';
import { api } from './boot/axios'

const app = createApp(App);
app.config.globalProperties.$axios = api;
app.mount('#app');