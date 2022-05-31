export default class Settings {
  name: string;
  type: string;
  participantNumber: number;
  gameName: string;
  has3rdPlaceGame?: boolean;
  howPlayEachOther?: number;
  participantNames?: [];

  constructor(
    name: string,
    type: string,
    participantNumber: number,
    gameName: string,
    has3rdPlaceGame?: boolean,
    howPlayEachOther?: number,
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
