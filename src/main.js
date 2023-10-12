import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const axiosInstance = applyCaseMiddleware(
  axios.create({
    baseURL: import.meta.env.VITE_APP_API
  })
);

window.axios = axiosInstance;

createApp(App)
  .use(router)
  .mount("#app");