import { createRouter, createWebHistory } from 'vue-router';

import Products from './pages/Products.vue';
import Cart from './pages/Cart.vue';
import Login from './pages/Login.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/login', component: Login, meta: { requiresUnauth: true} },
    { path: '/products', component: Products },
    { path: '/cart', component: Cart, meta: { requiresAuth: true} }
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  }
  else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/products');
  }
  else {
    next();
  }
});
 export default router;