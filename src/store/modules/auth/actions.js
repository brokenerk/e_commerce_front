let timer;

export default {
  auth(context, userToken) {
    const expiresIn = 7200000; // 2 hrs
    const expirationDate = new Date().getTime() + expiresIn;

    // localStorage.setItem("userToken", userToken);
    localStorage.setItem("tokenExpiration", expirationDate);

    timer = setTimeout(function() {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUserToken', userToken);
  },
  tryLogin(context, userToken) {
    // const userToken = localStorage.getItem('userToken');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function() {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (userToken) {
      context.commit('setUserToken', userToken);
    }
  },
  logout(context) {
    // localStorage.removeItem('userToken');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUserToken', null);
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};