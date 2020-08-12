import * as React from 'react';

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
export interface ITrackerBoxProps {
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
  titleImagePositionX: number;
  /** y coordinate for title in the underlying image */
  titleImagePositionY: number;
  /** x coordinate adjustment for the title for this box */
  titlePositionAdjustmentX: number;
  /** y coordinate adjustment for the title for this box */
  titlePositionAdjustmentY: number;
}

export interface IIconProps {
  /** Text to display in the settings menu caption */
  title: string;
  /** Current state of the icon: toggled on or off */
  state: Toggle;
  /** Object that describes the presentation of the icon when toggled off */
  offStateStyle: React.CSSProperties;
  /** Object that describes the presentation of the icon when toggled on */
  onStateStyle: React.CSSProperties;
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