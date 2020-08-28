/**
 * trackerProperties -
 * Add/remove tracker boxes here to populate the app's tracker container.
 */
import { ITitle, ITrackerBoxProps, ITrackerContainerProps, ISettingsProps } from "../models";
import * as Icons from "./iconProperties";
import { IItemNames } from "../strings";

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
export const timerTrackerBox: ITrackerBoxProps = {
  id: "Timer",
  isTimer: true,
  visible: true,
  boxPositionX: 8,
  boxPositionY: 8,
  boxWidth: 584,
  boxHeight: 80,
  fontSize: 70,
  fontWeight: 700,
  textAlign: "center",
  cursor: "pointer",
  ...timerTitle,
  // empty props
  settings: {} as ISettingsProps,
  handleHover: () => {},
}

// If timer is visible, other boxes will shift down
const timerShift = timerTrackerBox.visible ? 136 : 0;
export const itemsTrackerBox = (names: IItemNames): ITrackerBoxProps => {
  return {
    id: "Items",
    visible: true,
    boxPositionX: 8,
    boxPositionY: 8 + timerShift,
    boxWidth: 372,
    boxHeight: 312,
    ...itemsTitle,
    icons:
    [
      Icons.bridgeIcon(names), Icons.luteIcon(names), Icons.crownIcon(names), Icons.crystalEyeIcon(names), Icons.herbIcon(names),
      Icons.shipIcon(names), Icons.keyIcon(names), Icons.tntIcon(names), Icons.rubyIcon(names), Icons.rodIcon(names),
      Icons.canalIcon(names), Icons.floaterIcon(names), Icons.tailIcon(names), Icons.bottleIcon(names), Icons.oxyaleIcon(names),
      Icons.canoeIcon(names), Icons.slabIcon(names), Icons.chimeIcon(names), Icons.cubeIcon(names), Icons.adamantIcon(names),
    ],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const orbsTrackerBox = (names: IItemNames): ITrackerBoxProps => {
  return {
    id: "Orbs",
    visible: true,
    boxPositionX: 436,
    boxPositionY: 8 + timerShift,
    boxWidth: 156,
    boxHeight: 312,
    ...orbsTitle,
    icons: [ Icons.earthOrb(names), Icons.fireOrb(names), Icons.waterOrb(names), Icons.airOrb(names) ],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const npcsTrackerBox = (names: IItemNames): ITrackerBoxProps => {
  return {
    id: "Npcs",
    visible: true,
    boxPositionX: 8,
    boxPositionY: 376 + timerShift,
    boxWidth: 584,
    boxHeight: 164,
    ...npcsTitle,
    icons:
    [
      Icons.kingIcon(names), Icons.saraIcon(names), Icons.bikkeIcon(names), Icons.sardaIcon(names), Icons.sagesIcon(names), Icons.robotIcon(names), Icons.shopkeeperIcon(names),
      Icons.astosIcon(names), Icons.matoyaIcon(names), Icons.elfIcon(names), Icons.nerrickIcon(names), Icons.smythIcon(names), Icons.lefeinianIcon(names), Icons.fairyIcon(names),
    ],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

////// Tracker container //////
export const ffrTracker = (names: IItemNames): Partial<ITrackerContainerProps> => {
  return {
    boxes: [itemsTrackerBox(names), orbsTrackerBox(names), npcsTrackerBox(names), timerTrackerBox],
  }
}
