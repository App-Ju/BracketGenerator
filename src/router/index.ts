import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SettingsView from "../views/SettingsView.vue";
import BracketView from "../views/BracketView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: SettingsView,
  },
  {
    path: "/bracket",
    name: "bracket",
    component: BracketView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
