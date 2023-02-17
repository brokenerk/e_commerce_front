import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions';

export default {
  state() {
    return {
      userToken: null,
      didAutoLogout: false
    };
  },
  mutations,
  getters,
  actions
};