import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import egalWidgets from "@egalteam/widget-library";
import "@egalteam/widget-library/dist/style.css";

import "@/assets/style/global.scss";

createApp(App).use(router).use(createPinia()).use(egalWidgets).mount("#app");
