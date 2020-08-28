/**
 * trackerProperties -
 * Add/remove tracker boxes here to populate the app's tracker container.
 */
import { ITitle, ITrackerBoxProps, ITrackerContainerProps, Borders, IconNameType, ISettingsProps } from "../models";
import * as Icons from "./iconProperties";

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
export const itemsTrackerBox: ITrackerBoxProps = {
  id: "Items",
  visible: true,
  boxPositionX: 8,
  boxPositionY: 8 + timerShift,
  boxWidth: 372,
  boxHeight: 312,
  ...itemsTitle,
  icons:
  [
    Icons.bridgeIcon, Icons.luteIcon, Icons.crownIcon, Icons.crystalEyeIcon, Icons.herbIcon,
    Icons.shipIcon, Icons.keyIcon, Icons.tntIcon, Icons.rubyIcon, Icons.rodIcon,
    Icons.canalIcon, Icons.floaterIcon, Icons.tailIcon, Icons.bottleIcon, Icons.oxyaleIcon,
    Icons.canoeIcon, Icons.slabIcon, Icons.chimeIcon, Icons.cubeIcon, Icons.adamantIcon,
  ],
  // empty props
  settings: {} as ISettingsProps,
  handleHover: () => {},
}

export const orbsTrackerBox: ITrackerBoxProps = {
  id: "Orbs",
  visible: true,
  boxPositionX: 436,
  boxPositionY: 8 + timerShift,
  boxWidth: 156,
  boxHeight: 312,
  ...orbsTitle,
  icons: [ Icons.earthOrb, Icons.fireOrb, Icons.waterOrb, Icons.airOrb ],
  // empty props
  settings: {} as ISettingsProps,
  handleHover: () => {},
}

export const npcsTrackerBox: ITrackerBoxProps = {
  id: "Npcs",
  visible: true,
  boxPositionX: 8,
  boxPositionY: 376 + timerShift,
  boxWidth: 584,
  boxHeight: 164,
  ...npcsTitle,
  icons:
  [
    Icons.kingIcon, Icons.saraIcon, Icons.bikkeIcon, Icons.sardaIcon, Icons.sagesIcon, Icons.robotIcon, Icons.shopkeeperIcon,
    Icons.astosIcon, Icons.matoyaIcon, Icons.elfIcon, Icons.nerrickIcon, Icons.smythIcon, Icons.lefeinianIcon, Icons.fairyIcon,
  ],
  // empty props
  settings: {} as ISettingsProps,
  handleHover: () => {},
}

////// Tracker container //////
// TODO: Will need a way to have these items updated by the Settings component
export const ffrTracker: Partial<ITrackerContainerProps> = {
  boxes: [itemsTrackerBox, orbsTrackerBox, npcsTrackerBox, timerTrackerBox],
}
