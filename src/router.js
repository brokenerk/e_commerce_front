import { createRouter, createWebHistory } from 'vue-router';

import Products from './pages/Products.vue';
import Cart from './pages/Cart.vue';
import Login from './pages/Login.vue';
import Orders from './pages/Orders.vue';
import OrderDetail from './pages/OrderDetail.vue';
import ProductDetail from './pages/ProductDetail.vue';
import Register from './pages/Register.vue';
import Profile from './pages/Profile.vue';
import Buy from './pages/Buy.vue';
import NotFound from './pages/NotFound.vue';
import Wishlist from './pages/Wishlist.vue';
import Review from './pages/Review.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/login', component: Login, meta: { requiresUnauth: true} },
    { path: '/products', component: Products },
    { path: '/products/:id', component: ProductDetail },
    { path: '/cart', component: Cart, meta: { requiresAuth: true} },
    { path: '/orders', component: Orders, meta: { requiresAuth: true} },
    { path: '/orders/:id', component: OrderDetail, meta: { requiresAuth: true} },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile, meta: { requiresAuth: true} },
    { path: '/buy', component: Buy, meta: { requiresAuth: true} },
    { path: '/wishlist', component: Wishlist, meta: { requiresAuth: true} },
    { path: '/review/:id', component: Review, meta: { requiresAuth: true} },
    { path: '/:notFound', component: NotFound }
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