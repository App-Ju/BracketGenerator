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
     * Задает количество участников турнира
     * @param value
     */
    setParticipantNumber(value: number): void {
      this.settings.participantNumber = value;
    },
    /**
     * Задает имена участников турнира
     * @param names
     */
    setParticipantNames(names: string) {
      this.settings.participantNames = names.trim().split("\n");
      this.setParticipantNumber(this.settings.participantNames.length);
    },
  },
  getters: {},
});
