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

/** Defines which set of strings to use for the names of icons */
export enum IconNameType {
  original,
  modern
}

////// Constants //////
/** The base tweak value to shift icons down by 8 pixels */
export const BASE_Y_TWEAK = 8;
/** The base tweak value to have an 8 pixel gap between each icon */
export const BASE_X_TWEAK = 8;

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
export interface ITitle {
  /** x coordinate for title in the underlying image */
  titleImageLocationX: number;
  /** y coordinate for title in the underlying image */
  titleImageLocationY: number;
  /** Pixel width of the title */
  titleWidth: number;
}

export interface IIconProps {
  /** Text to display in the settings menu caption; doubles as div id */
  title: string;
  /** Current state of the icon: toggled on or off */
  state: Toggle;
  /** Width of the icon in pixels */
  width: number;
  /** Height of the icon in pixels */
  height: number;
  /** Row the icon will be located in the box */
  row: number;
  /** Column the icon will be located in the box */
  column: number;
  /** Tweaked x position from the row/col location */
  offsetX?: number;
  /** Tweaked y position from the row/col location */
  offsetY?: number;
  /** x coordinate for the off state icon in the underlying image */
  offStateImageLocationX: number;
  /** y coordinate for the off state icon in the underlying image */
  offStateImageLocationY: number;
  /** x coordinate for the on state icon in the underlying image */
  onStateImageLocationX: number;
  /** y coordinate for the on state icon in the underlying image */
  onStateImageLocationY: number;
}

export interface ITrackerBoxProps extends ITitle {
  /** The id attribute to set on this tracker box instance */
  id: string;
  /** x coordinate for left position of box drawn in browser window */
  boxPositionX: number;
  /** y coordinate for top position of box drawn in browser window */
  boxPositionY: number;
  /** Width of the box in the browser window */
  boxWidth: number;
  /** Height of the box in the browser window */
  boxHeight: number;
  /** Collection of icons to render in this box */
  icons?: IIconProps[];
}

export interface ITrackerContainerProps {
  /** Current state of the box borders: off, thin, or thick */
  bordersState: Borders;
  /** Setting that describes the collection of names to use for objects */
  nameType: IconNameType;
  /** Tracker boxes to show in this container */
  boxes: ITrackerBoxProps[];
}
