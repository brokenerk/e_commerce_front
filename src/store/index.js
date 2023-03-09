import { createStore } from 'vuex';
import authModule from './modules/auth/index.js';
import searchbarModule from './modules/searchbar/index.js';

const store = createStore({
  modules: {
    auth: authModule,
    searchbar: searchbarModule
  }
});

export default store;