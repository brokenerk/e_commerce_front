import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
      userToken: null
		};
	},
	mutations: {
		setUserToken(state, payload) {
      state.userToken = payload.token;
		}
	},
	getters: {
    userToken(state) {
			return state.userToken;
		}
	}
});

export default store;