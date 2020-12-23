/**
 * trackerProperties -
 * Add/remove tracker boxes here to populate the app's tracker container.
 */
import { Goals, IIconProps, ISettingsProps, ITitle, ITrackerBoxProps, ITrackerContainerProps } from "../models";
import { IItemNames } from "../strings";
import * as Icons from "./iconProperties";

////// Title data //////
export const itemsTitle = (isModern: boolean): ITitle => {
  return {
    titleImageLocationX: 0,
    titleImageLocationY: 0,
    titleWidth: isModern ? 58 : 69,
  };
};

export const npcsTitle = (isModern: boolean): ITitle => {
  return {
    titleImageLocationX: 0,
    titleImageLocationY: 20,
    titleWidth: isModern ? 56 : 67,
  };
};

export const crystalsTitle = (isModern: boolean): ITitle => {
  return {
    titleImageLocationX: 0,
    titleImageLocationY: 80,
    titleWidth: isModern ? 92 : 109,
  };
};

export const orbsTitle = (isModern: boolean): ITitle => {
  return {
    titleImageLocationX: 0,
    titleImageLocationY: 100,
    titleWidth: isModern ? 52 : 67,
  };
};

export const shardsTitle = (isModern: boolean): ITitle => {
  return {
    titleImageLocationX: 0,
    titleImageLocationY: 120,
    titleWidth: isModern ? 74 : 89,
  };
};

export const timerTitle = (isModern: boolean): ITitle => {
  return {
    titleImageLocationX: 0,
    titleImageLocationY: 60,
    titleWidth: isModern ? 48 : 57,
  };
};

////// Tracker boxes //////
export const timerTrackerBox = (isVisible: boolean, isModern: boolean): ITrackerBoxProps => {
  return {
    id: "Timer",
    isTimer: true,
    visible: isVisible,
    boxPositionX: 8,
    boxPositionY: 8,
    boxWidth: 584,
    boxHeight: 80,
    fontSize: 70,
    fontWeight: 700,
    textAlign: "center",
    cursor: "pointer",
    ...timerTitle(isModern),
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const itemsTrackerBox = (names: IItemNames, timerVisible: boolean, isModern: boolean): ITrackerBoxProps => {
  // If timer is visible, other boxes will shift down
  const timerShift = timerVisible ? 136 : 0;
  return {
    id: "Items",
    visible: true,
    boxPositionX: 8,
    boxPositionY: 8 + timerShift,
    boxWidth: 372,
    boxHeight: 312,
    ...itemsTitle(isModern),
    icons: [
      Icons.bridgeIcon(names),
      Icons.luteIcon(names),
      Icons.crownIcon(names),
      Icons.crystalEyeIcon(names),
      Icons.herbIcon(names),
      Icons.shipIcon(names),
      Icons.keyIcon(names),
      Icons.tntIcon(names),
      Icons.rubyIcon(names),
      Icons.rodIcon(names),
      Icons.canalIcon(names),
      Icons.floaterIcon(names),
      Icons.tailIcon(names),
      Icons.bottleIcon(names),
      Icons.oxyaleIcon(names),
      Icons.canoeIcon(names),
      Icons.slabIcon(names),
      Icons.chimeIcon(names),
      Icons.cubeIcon(names),
      Icons.adamantIcon(names),
    ],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

const orbTitleProps = (goal: Goals, isModern: boolean): ITitle => {
  switch (goal) {
    case Goals.regular:
    case Goals.chaosRush:
      return isModern ? crystalsTitle(isModern) : orbsTitle(isModern);
    case Goals.shardHunt:
      return shardsTitle(isModern);
  }
};
const orbIconsProps = (names: IItemNames, goal: Goals, isModern: boolean): IIconProps[] => {
  switch (goal) {
    case Goals.regular:
    case Goals.chaosRush:
      return [
        Icons.earthOrb(names, isModern),
        Icons.fireOrb(names, isModern),
        Icons.waterOrb(names, isModern),
        Icons.airOrb(names, isModern),
      ];
    case Goals.shardHunt:
      // TODO: Change to use the shard icons once that is created
      return [
        Icons.earthOrb(names, isModern),
        Icons.fireOrb(names, isModern),
        Icons.waterOrb(names, isModern),
        Icons.airOrb(names, isModern),
      ];
  }
};
export const orbsTrackerBox = (names: IItemNames, goal: Goals, timerVisible: boolean, isModern: boolean): ITrackerBoxProps => {
  // If timer is visible, other boxes will shift down
  const timerShift = timerVisible ? 136 : 0;
  return {
    id: "Orbs",
    visible: true,
    boxPositionX: 436,
    boxPositionY: 8 + timerShift,
    boxWidth: 156,
    boxHeight: 312,
    ...orbTitleProps(goal, isModern),
    icons: orbIconsProps(names, goal, isModern),
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const npcsTrackerBox = (names: IItemNames, timerVisible: boolean, isModern: boolean): ITrackerBoxProps => {
  // If timer is visible, other boxes will shift down
  const timerShift = timerVisible ? 136 : 0;
  return {
    id: "Npcs",
    visible: true,
    boxPositionX: 8,
    boxPositionY: 376 + timerShift,
    boxWidth: 584,
    boxHeight: 164,
    ...npcsTitle(isModern),
    icons: [
      Icons.kingIcon(names),
      Icons.saraIcon(names),
      Icons.bikkeIcon(names),
      Icons.sardaIcon(names),
      Icons.sagesIcon(names),
      Icons.robotIcon(names),
      Icons.titanIcon(names),
      Icons.shopkeeperIcon(names),
      Icons.astosIcon(names),
      Icons.matoyaIcon(names),
      Icons.elfIcon(names),
      Icons.nerrickIcon(names),
      Icons.smythIcon(names),
      Icons.drUnneIcon(names),
      Icons.lefeinianIcon(names),
      Icons.fairyIcon(names),
    ],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

////// Tracker container //////
export const ffrTracker = (names: IItemNames, goal: Goals, isVisible: boolean, isModern: boolean): Partial<ITrackerContainerProps> => {
  return {
    boxes: [
      itemsTrackerBox(names, isVisible, isModern),
      orbsTrackerBox(names, goal, isVisible, isModern),
      npcsTrackerBox(names, isVisible, isModern),
      timerTrackerBox(isVisible, isModern),
    ],
  };
};
