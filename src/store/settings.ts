import { defineStore } from "pinia";
import Settings from "@/models/Settings";

export const useSettingsStore = defineStore({
  id: "settings",
  state: () => ({
    settings: {} as Settings,
  }),
  actions: {},
  getters: {},
});
