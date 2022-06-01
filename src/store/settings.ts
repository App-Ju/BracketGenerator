import { defineStore } from "pinia";
import Settings from "@/models/Settings";
import { ISelectOption } from "@/typescript/interfaces";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    settings: new Settings("", 1, "", 1, 0, false),
  }),
  actions: {
    /**
     * Задает имя турнира
     * @param name
     */
    setTournamentName(name: string): void {
      this.settings.name = name;
    },
    /**
     * Задает тип турнирной сетки
     * @param type
     */
    setType(type: ISelectOption): void {
      this.settings.type = type.key;
      this.settings.has3rdPlaceGame = false;

      type.key === 3
        ? (this.settings.howPlayEachOther = 1)
        : (this.settings.howPlayEachOther = undefined);
    },
    /**
     * Отвечает за наличие игры за 3 место, для типа турнира = 1
     * @param value
     */
    set3rdPlaceGame(value: boolean): void {
      this.settings.has3rdPlaceGame = value;
    },
    /**
     * Отвечает за количество игр между участниками, для типа турнира = 3
     * @param value
     */
    setNumberOfGames(value: ISelectOption): void {
      this.settings.howPlayEachOther = value.key;
    },
    /**
     * Задает тип вычисления количества участников
     * @param value
     */
    setBracketSizeType(value: ISelectOption): void {
      this.settings.bracketSizeType = value.key;
    },
    /**
     * Создает массив пустых строк по количеству учатсников
     * @param value
     */
    // TODO объединить следующие два метода
    setParticipantNumber(value: number): void {
      this.settings.participantNames = Array(value).fill("");
      this.setRounds(value);
    },
    /**
     * Создает массив имен участников
     * @param names
     */
    setParticipantNames(names: string) {
      this.settings.participantNames = names.trim().split("\n");
      this.setRounds(this.settings.participantNames.length);
    },
    /**
     * Определяет количество раундов для типв турнира = 1
     * @param value
     */
    setRounds(value: number) {
      if (value <= 0) {
        this.settings.rounds = 0;
      } else if (value <= 2) {
        this.settings.rounds = 1;
      } else if (value <= 4) {
        this.settings.rounds = 2;
      } else if (value <= 8) {
        this.settings.rounds = 3;
      } else if (value <= 16) {
        this.settings.rounds = 4;
      } else if (value <= 32) {
        this.settings.rounds = 5;
      } else if (value <= 64) {
        this.settings.rounds = 6;
      } else {
        this.settings.rounds = 7;
      }
    },
  },
  getters: {},
});
