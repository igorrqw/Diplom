import { createApp } from "vue";
import App from "./App.vue";
import "./styles/styles.scss";
import "bootstrap/dist/js/bootstrap.js";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
