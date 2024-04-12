import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VueProgressBar from "@aacassandra/vue3-progressbar";
import Flutterwave from "flutterwave-vue3";
// import './registerServiceWorker'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

const progressBarOptions = {
  color: "#367d21",
  failedColor: "#ff0000",
  thickness: "3px",
  transition: {
    speed: "0.2s",
    opacity: "1",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

app.use(VueProgressBar, progressBarOptions);
app.use(Flutterwave, {
  publicKey: "FLWPUBK-fb2240ea08f298ec1c26ad90124fc401-X",
});

app.mount("#app");
