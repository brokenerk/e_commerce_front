export default {
  setUserToken(state, token) {
    state.userToken = token;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  }
};