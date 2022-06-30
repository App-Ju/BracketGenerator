import { defineStore } from "pinia";
import { useSettingsStore } from "@/store/settings";
import { IBracketItem } from "@/typescript/interfaces";

export const useBracketStore = defineStore("bracket", {
  state: () => ({
    bracket: [] as IBracketItem[][][],
  }),
  actions: {
    /**
     * Создает турнирную сетку наполненную пустыми массивами
     * @param rounds - количество раундов в турнире
     * @param firstRoundSize - количество матчей в первом раунде
     */
    setBracket(rounds: number, firstRoundSize: number) {
      let roundSize = firstRoundSize;
      for (let i = 0; i < rounds; i++) {
        this.bracket[i] = new Array(roundSize);
        for (let j = 0; j < roundSize; j++) {
          this.bracket[i][j] = [{}, {}];
        }
        roundSize = roundSize / 2;
      }
      this.bracket[0].forEach((el: IBracketItem[]) => (el[0].id = 0));
    },
    /**
     * Заполняет каждый второй элемент массива, заполнение идёт от начал массива
     * затем в обратном направлении при необходимости.
     * @param size - максимально возможное количество матчей в первом раунде
     * @param matches - количество раундов в первом раунде
     */
    fillFirstRound(size: number, matches: number) {
      const settingsStore = useSettingsStore();
      const amount =
        size / 2 > matches || size / 2 === matches ? matches * 2 : size;
      for (let i = 0; i < amount; i += 2) {
        const first = settingsStore.settings.participantNames?.shift();
        const last = settingsStore.settings.participantNames?.pop();
        this.bracket[0][i + 1] = [first as IBracketItem, last as IBracketItem];
      }
      for (let i = 0; i < matches - size / 2; i++) {
        const index = size - i * 2 - 2;
        const first = settingsStore.settings.participantNames?.shift();
        const last = settingsStore.settings.participantNames?.pop();
        this.bracket[0][index] = [first as IBracketItem, last as IBracketItem];
      }
    },
    /**
     * Заполняет элементы массива с индексом "0", заполнение идёт от начал массива
     * затем в обратном направлении с индексом "1", при необходимости.
     * @param size - максимально возможное количество матчей во втором раунде
     * @param teams - количество команд во втором раунде
     */
    fillSecondRound(size: number, teams: number) {
      const settingsStore = useSettingsStore();
      const amount = size > teams || size === teams ? teams : size;
      for (let i = 0; i < amount; i++) {
        const item = settingsStore.settings.participantNames?.shift();
        this.bracket[1][i][0] = item as IBracketItem;
      }
      for (let i = 0; i < teams - size; i++) {
        const index = size - i - 1;
        const item = settingsStore.settings.participantNames?.shift();
        this.bracket[1][index][1] = item as IBracketItem;
      }
    },
  },
  getters: {},
});
