import { useSettingsStore } from "@/store/settings";
import { useBracketStore } from "@/store/bracket";
import router from "@/router";
// import { ref } from "vue";

export function useCreateBracket() {
  const settingsStore = useSettingsStore();
  const bracketStore = useBracketStore();

  function initialBracket() {
    bracketStore.bracket = [];
    const firstRoundSize = matchesAmount(2, settingsStore.settings.rounds);
    let secondRoundTeams = 0;
    let firstRoundMatches = 0;
    if (settingsStore.settings.participantNames) {
      secondRoundTeams =
        firstRoundSize * 2 - settingsStore.settings.participantNames.length;
      firstRoundMatches =
        (settingsStore.settings.participantNames.length - secondRoundTeams) / 2;
    }

    bracketStore.setBracket(settingsStore.settings.rounds, firstRoundSize);
    bracketStore.fillSecondRound(firstRoundSize / 2, secondRoundTeams);
    bracketStore.fillFirstRound(firstRoundSize, firstRoundMatches);
    router.push("/bracket");
  }

  function matchesAmount(x: number, n: number): number {
    if (n === 1) {
      return 1;
    } else if (n > 1) {
      return 2 * matchesAmount(x, n - 1);
    } else {
      return 0;
    }
  }

  return { initialBracket };
}
