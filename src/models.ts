////// States //////
export interface ISettingsState {
  goal: Goals;
  freeOrbs: Toggle;
  layout: Layouts;
  border: Borders;
  showTimer: Toggle;
  showCrystals: Toggle;
}

////// Props //////
export interface IIconProps {
  /** Text to display in the settings menu caption; doubles as div id */
  title: string;
  /** Current state of the icon: toggled on or off */
  state: Toggle;
  /** Width of the icon in pixels */
  width: number;
  /** Height of the icon in pixels */
  height: number;
  /** x position from the left of the box */
  positionX: number;
  /** y position from the top of the box */
  positionY: number;
  /** x coordinate for the off state icon in the underlying image */
  offStateImageLocationX: number;
  /** y coordinate for the off state icon in the underlying image */
  offStateImageLocationY: number;
  /** x coordinate for the on state icon in the underlying image */
  onStateImageLocationX: number;
  /** y coordinate for the on state icon in the underlying image */
  onStateImageLocationY: number;
}

export interface ITrackerBoxProps {
  /** The id attribute to set on this tracker box instance */
  id: string;
  /** Current state of the box border: off, thin, or thick */
  state: Borders;
  /** x coordinate for left position of box drawn in browser window */
  boxPositionX: number;
  /** y coordinate for top position of box drawn in browser window */
  boxPositionY: number;
  /** Width of the box in the browser window */
  boxWidth: number;
  /** Height of the box in the browser window */
  boxHeight: number;
  /** x coordinate for title in the underlying image */
  titleImageLocationX: number;
  /** y coordinate for title in the underlying image */
  titleImageLocationY: number;
  /** x coordinate adjustment for the title for this box */
  titlePositionAdjustmentX: number;
  /** y coordinate adjustment for the title for this box */
  titlePositionAdjustmentY: number;
  /** Collection of icons to render in this box */
  icons?: IIconProps[];
}

export interface ITrackerContainerProps {
  boxes: ITrackerBoxProps[];
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

////// Constants //////
export const itemsTitle = {
  id: "Items",
  titleImageLocationX: 0,
  titleImageLocationY: 0,
}

export const npcsTitle = {
  id: "Npcs",
  titleImageLocationX: 0,
  titleImageLocationY: 20,
}

export const crystalsTitle = {
  id: "Crystals",
  titleImageLocationX: 0,
  titleImageLocationY: 80,
}

export const orbsTitle = {
  id: "Orbs",
  titleImageLocationX: 0,
  titleImageLocationY: 100,
}

export const shardsTitle = {
  id: "Shards",
  titleImageLocationX: 0,
  titleImageLocationY: 120,
}

export const timerTitle = {
  id: "Timer",
  titleImageLocationX: 0,
  titleImageLocationY: 60,
}
