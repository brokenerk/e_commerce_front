import { createRouter, createWebHistory } from 'vue-router';

import Products from './pages/Products.vue';
import Login from './pages/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/products' },
        { path: '/login', component: Login },
        { path: '/products', component: Products },
    ],
});
 export default router;