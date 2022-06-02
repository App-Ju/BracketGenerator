import { tournamentType, howManyGames, bracketSize } from "@/typescript/enums";
import { IBracketItem } from "@/typescript/interfaces";

export default class Settings {
  name: string;
  type: tournamentType;
  gameName: string;
  bracketSizeType: bracketSize;
  rounds: number;
  has3rdPlaceGame?: boolean;
  howPlayEachOther?: howManyGames;
  participantNames?: IBracketItem[];

  constructor(
    name: string,
    type: tournamentType,
    gameName: string,
    bracketSizeType: bracketSize,
    rounds: number,
    has3rdPlaceGame?: boolean,
    howPlayEachOther?: howManyGames,
    participantNames?: IBracketItem[]
  ) {
    this.name = name;
    this.type = type;
    this.gameName = gameName;
    this.bracketSizeType = bracketSizeType;
    this.rounds = rounds;
    this.has3rdPlaceGame = has3rdPlaceGame;
    this.howPlayEachOther = howPlayEachOther;
    this.participantNames = participantNames;
  }
}
