import { ref, reactive } from "vue";
import { tournamentType } from "@/typescript/enums";
import { ISelectOption } from "@/typescript/interfaces";
import { useSettingsStore } from "@/store/settings";

export function useType() {
  const settingsStore = useSettingsStore();
  const currentType = ref(1);
  const typeOptions = reactive([
    {
      name: "Single Elimination",
      key: tournamentType.SingleElimination,
    },
    {
      name: "Double Elimination",
      key: tournamentType.DoubleElimination,
    },
    {
      name: "Round Robin",
      key: tournamentType.RoundRobin,
    },
  ]);
  /**
   * Задает тип турнирной сетки
   * @param type
   */
  const setTournamentType = (type: ISelectOption) => {
    currentType.value = type.key;
    settingsStore.setType(type);
  };

  return { currentType, typeOptions, setTournamentType, tournamentType };
}
