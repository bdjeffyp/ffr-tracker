import { ISettingsItem, ISettingsGroup, SettingsNames, Goals, Toggle, Layouts, Borders } from "../models";
import { ISettingsState } from "../components/Settings/Settings";

////// Goals section //////
const regularGoal = (state: ISettingsState): ISettingsItem => {
  const crystals = state.currentShowCrystals === Toggle.on ? "crystals" : "ORBs";
  return {
    name: "Regular",
    caption: "No Variation (Light " + crystals + ", get key/lute)",
    isRadio: true,
    group: SettingsNames.goal,
    value: Goals.regular,
    currentValue: state.currentGoal,
  }
}

const shardHuntGoal = (state: ISettingsState): ISettingsItem => {
  const crystals = state.currentShowCrystals === Toggle.on ? "CRYSTALS" : "ORBS";
  const disabled = state.currentFreeOrbs === Toggle.on;
  let caption = "Find a required number of crystal shards";
  if (disabled) {
    caption += " - UNAVAILABLE WITH FREE " + crystals;
  }
  return {
    name: "Shard Hunt",
    caption: caption,
    isRadio: true,
    group: SettingsNames.goal,
    value: Goals.shardHunt,
    currentValue: state.currentGoal,
    // This goal is not selectable if Free ORBs is on
    disabled: disabled,
  }
}

const chaosRushGoal = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Chaos Rush",
    caption: "Have lute, key not required in Temple of Fiends Revisited",
    isRadio: true,
    group: SettingsNames.goal,
    value: Goals.chaosRush,
    currentValue: state.currentGoal,
  }
}

const freeOrbsMode = (state: ISettingsState): ISettingsItem => {
  const crystals = state.currentShowCrystals === Toggle.on ? "crystals" : "ORBs";
  const disabled = state.currentGoal === Goals.shardHunt;
  let caption = "Have all " + crystals + " lit at the start";
  if (disabled) {
    caption += " - UNAVAILABLE WITH SHARD HUNT";
  }
  return {
    name: "Free " + crystals,
    caption: caption,
    isRadio: false,
    group: SettingsNames.freeOrbs,
    value: Toggle.on,
    currentValue: state.currentFreeOrbs,
    // This mode is not selectable if Shard Hunt is the goal
    disabled: disabled,
  }
}

const goalsSettings = (state: ISettingsState): ISettingsGroup => {
  return {
    title: "GOAL",
    xPosition: 50,
    yPosition: 40,
    settings: [
      regularGoal(state),
      shardHuntGoal(state),
      chaosRushGoal(state),
      freeOrbsMode(state),
    ],
  }
}

////// Layout section //////
const squareLayout = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Square",
    caption: "A square-ish layout",
    isRadio: true,
    group: SettingsNames.layout,
    value: Layouts.square,
    currentValue: state.currentLayout,
  }
}

const layoutSettings = (state: ISettingsState): ISettingsGroup => {
  return {
    title: "LAYOUT",
    xPosition: 170,
    yPosition: 40,
    settings: [
      squareLayout(state),
    ],
  }
}

////// Borders section //////
const noBorder = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Off",
    caption: "No Border (most compact)",
    isRadio: true,
    group: SettingsNames.border,
    value: Borders.off,
    currentValue: state.currentBorder,
  }
}

const thinBorder = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Thin",
    caption: "Thin border",
    isRadio: true,
    group: SettingsNames.border,
    value: Borders.thin,
    currentValue: state.currentBorder,
  }
}

const thickBorder = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Thick",
    caption: "Thick border",
    isRadio: true,
    group: SettingsNames.border,
    value: Borders.thick,
    currentValue: state.currentBorder,
  }
}

const borderSettings = (state: ISettingsState): ISettingsGroup => {
  return {
    title: "BORDERS",
    xPosition: 290,
    yPosition: 40,
    settings: [
      noBorder(state),
      thinBorder(state),
      thickBorder(state),
    ],
  }
}

////// Timer section //////
const timerOff = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Off",
    caption: "No timer",
    isRadio: true,
    group: SettingsNames.timerMode,
    value: Toggle.off,
    currentValue: state.currentShowTimer,
  }
}

const timerOn = (state: ISettingsState): ISettingsItem => {
  return {
    name: "On",
    caption: "Show timer (click to start/pause, right-click to reset)",
    isRadio: true,
    group: SettingsNames.timerMode,
    value: Toggle.on,
    currentValue: state.currentShowTimer,
  }
}

const timerSettings = (state: ISettingsState): ISettingsGroup => {
  return {
    title: "TIMER",
    xPosition: 170,
    yPosition: 170,
    settings: [
      timerOff(state),
      timerOn(state),
    ],
  }
}

////// Crystal icons section //////
const crystalIcons = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Crystals",
    caption: "Use crystal icons and modern names",
    isRadio: true,
    group: SettingsNames.iconSet,
    value: Toggle.on,
    currentValue: state.currentShowCrystals,
  }
}

const orbIcons = (state: ISettingsState): ISettingsItem => {
  return {
    name: "ORBs",
    caption: "Use ORB icons and NES names",
    isRadio: true,
    group: SettingsNames.iconSet,
    value: Toggle.off,
    currentValue: state.currentShowCrystals,
  }
}

const iconSettings = (state: ISettingsState): ISettingsGroup => {
  return {
    title: "ERA",
    xPosition: 50,
    yPosition: 170,
    settings: [
      crystalIcons(state),
      orbIcons(state),
    ],
  }
}

////// Settings menu collection //////
export const settingsMenu = (state: ISettingsState): ISettingsGroup[] => [
  goalsSettings(state),
  layoutSettings(state),
  borderSettings(state),
  timerSettings(state),
  iconSettings(state),
]
