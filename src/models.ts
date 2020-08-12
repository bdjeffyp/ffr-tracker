////// States //////
export interface ISettingsState {
  goal: Goals;
  freeOrbs: Toggle;
  layout: Layouts;
  border: Borders;
  showTimer: Toggle;
  showCrystals: Toggle;
}

////// Enums //////
export enum Goals {
  regular = "regular",
  shardHunt = "shardHunt",
  chaosRush = "chaosRush",
}

export enum Layouts {
  square = "square",
  geographic = "geographic",
  tall = "tall",
  wide = "wide",
  allInOne = "allInOne",
}

export enum Borders {
  off = "off",
  thin = "thin",
  thick = "thick",
}

export enum Toggle {
  off = "off",
  on = "on",
}

export enum SettingsNames {
  goal = "goal",
  freeOrbs = "freeOrbs",
  layout = "layout",
  border = "border",
  timerMode = "timerMode",
  iconSet = "iconSet",
}