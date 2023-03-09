import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import { api } from './boot/axios';
import Swal from 'sweetalert2';

const app = createApp(App);

app.config.globalProperties.$axios = api;
const swal = Swal.mixin({
    confirmButtonColor: '#17a2b8',
    cancelButtonColor: '#dc3545',
});

app.config.globalProperties.$swal = swal;

app.use(router);
app.use(store);
app.mount('#app');