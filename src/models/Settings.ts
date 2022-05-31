import { tournamentType, howManyTimes, bracketSize } from "@/typescript/enums";

export default class Settings {
  name: string;
  type: tournamentType = tournamentType.SingleElimination;
  participantNumber: bracketSize = bracketSize.list;
  gameName: string;
  has3rdPlaceGame?: boolean;
  howPlayEachOther?: howManyTimes = howManyTimes.One;
  participantNames?: [];

  constructor(
    name: string,
    type: tournamentType,
    participantNumber: bracketSize,
    gameName: string,
    has3rdPlaceGame?: boolean,
    howPlayEachOther?: howManyTimes,
    participantNames?: []
  ) {
    this.name = name;
    this.type = type;
    this.participantNumber = participantNumber;
    this.gameName = gameName;
    this.has3rdPlaceGame = has3rdPlaceGame;
    this.howPlayEachOther = howPlayEachOther;
    this.participantNames = participantNames;
  }
}
