import { createRouter, createWebHistory } from 'vue-router';

import Products from './pages/Products.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/products' },
        { path: '/products', component: Products }
    ],
});
 export default router;