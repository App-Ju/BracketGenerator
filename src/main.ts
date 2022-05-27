import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import egalWidgets from "@egalteam/widget-library";
import "@egalteam/widget-library/dist/style.css";

import "@/assets/style/global.scss";

createApp(App).use(router).use(egalWidgets).mount("#app");
