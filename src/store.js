import { createStore } from 'vuex';
import { axios } from './boot/axios';

const store = createStore({
	state() {
		return {
			axios: axios,
      userToken: null
		};
	},
	mutations: {
		setUserToken(state, payload) {
      state.userToken = payload.token;
		}
	},
	getters: {
		axios(state) {
			return state.axios;
		},
    userToken(state) {
			return state.userToken;
		}
	}
});

export default store;