import axios from 'axios';
import store from '.././store/index.js';

let config = {
  baseURL: "https://e-commerce-api.up.railway.app/e_commerce",
  headers: { 
    'Cache-Control': 'no-cache, must-revalidate', 
    'Pragma': 'no-cache', 
    'Access-Control-Allow-Origin': '*', 
    'Content-Type': 'application/json'
  },
  timeout: 120000
};

const api = axios.create(config);

api.interceptors.request.use(
  function (config) {
    const token = store.getters.userToken;
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { api };