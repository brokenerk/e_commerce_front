export default {
  userToken(state) {
    return state.userToken;
  },
  isAuthenticated(state) {
    return !!state.userToken;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  }
};