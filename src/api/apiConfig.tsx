import axios from "axios";
import { useAuthStore } from "../store/auth";

const API_URL = "http://127.0.0.1:8000";

const apiConfig = {
  url: {
    document: {
      list: () => `/document/list`,
      view: () => `/document/view`,
      version: () => `/document/version`,
      historyActions: () => `/document/show_history`,
    },
    auth: {
      login: () => `/user/login`,
      logout: () => `/user/logout`,
    },
  },
};

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
  function (config) {
    if (!useAuthStore.getState().isLoggedIn) return config;
    const authToken = useAuthStore.getState().token;
    config.headers.Authorization = authToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.headers.authorization)
      useAuthStore.getState().set(response.headers.authorization);

    return response;
  },
  async function (error) {
    if (error.response.status === 401) useAuthStore.getState().clear();
    return Promise.reject(error);
  }
);

export default apiConfig;
