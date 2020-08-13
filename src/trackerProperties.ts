/**
 * trackerProperties -
 * Add/remove tracker boxes here to populate the app's tracker container.
 */
import { ITitle, ITrackerBoxProps, ITrackerContainerProps, Borders } from "./models"
import { bridgeIcon } from "./iconProperties"

////// Title data //////
export const itemsTitle: ITitle = {
  titleImageLocationX: 0,
  titleImageLocationY: 0,
  titleWidth: 58,
}

export const npcsTitle: ITitle = {
  titleImageLocationX: 0,
  titleImageLocationY: 20,
  titleWidth: 56,
}

export const crystalsTitle: ITitle = {
  titleImageLocationX: 0,
  titleImageLocationY: 80,
  titleWidth: 92,
}

export const orbsTitle: ITitle = {
  titleImageLocationX: 0,
  titleImageLocationY: 100,
  titleWidth: 52,
}

export const shardsTitle: ITitle = {
  titleImageLocationX: 0,
  titleImageLocationY: 120,
  titleWidth: 74,
}

export const timerTitle: ITitle = {
  titleImageLocationX: 0,
  titleImageLocationY: 60,
  titleWidth: 48,
}

////// Tracker boxes //////
export const itemsTrackerBox: ITrackerBoxProps = {
  id: "Items",
  boxPositionX: 8,
  boxPositionY: 8,
  boxWidth: 372,
  boxHeight: 312,
  ...itemsTitle,
  icons: [bridgeIcon],
}

////// Tracker container //////
export const ffrTracker: ITrackerContainerProps = {
  bordersState: Borders.thick,
  boxes: [itemsTrackerBox],
}
