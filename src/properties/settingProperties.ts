import { ISettingsState } from "../components/Settings/Settings";
import { Goals, ISettingsGroup, ISettingsItem, Layouts, SettingsNames, ShowNamesSettings, Toggle } from "../models";

////// Goals section //////
const regularGoal = (state: ISettingsState): ISettingsItem => {
  const isModern = state.currentEra === Toggle.on;
  const crystals = isModern ? "crystals" : "ORBs";
  return {
    name: "Regular",
    caption: "No Variation (Light " + crystals + ", get key/lute)",
    isRadio: true,
    group: SettingsNames.goal,
    value: Goals.regular,
    currentValue: state.currentGoal,
  };
};

const shardHuntGoal = (state: ISettingsState): ISettingsItem => {
  const isModern = state.currentEra === Toggle.on;
  // const crystals = isModern ? "CRYSTALS" : "ORBS";
  const disabled = true; //state.currentFreeOrbs === Toggle.on;
  let caption = "Find a required number of crystal shards - COMING SOON";
  // if (disabled) {
  //   caption += " - UNAVAILABLE WITH FREE " + crystals;
  // }
  return {
    name: "Shard Hunt",
    caption: caption,
    isRadio: true,
    group: SettingsNames.goal,
    value: Goals.shardHunt,
    currentValue: state.currentGoal,
    // This goal is not selectable if Free ORBs is on
    disabled: disabled,
  };
};

const chaosRushGoal = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Chaos Rush",
    caption: "Have lute, key not required in Temple of Fiends Revisited - COMING SOON",
    isRadio: true,
    group: SettingsNames.goal,
    value: Goals.chaosRush,
    currentValue: state.currentGoal,
    disabled: true,
  };
};

const freeOrbsMode = (state: ISettingsState): ISettingsItem => {
  const isModern = state.currentEra === Toggle.on;
  const crystals = isModern ? "crystals" : "ORBs";
  const disabled = true; //state.currentGoal === Goals.shardHunt;
  let caption = "Have all " + crystals + " lit at the start - COMING SOON";
  // if (disabled) {
  //   caption += " - UNAVAILABLE WITH SHARD HUNT";
  // }
  return {
    name: "Free " + crystals,
    caption: caption,
    isRadio: false,
    group: SettingsNames.freeOrbs,
    value: Toggle.on,
    currentValue: state.currentFreeOrbs,
    // This mode is not selectable if Shard Hunt is the goal
    disabled: disabled,
  };
};

const goalsSettings = (state: ISettingsState): ISettingsGroup => {
  return {
    title: "GOAL",
    xPosition: 50,
    yPosition: 40,
    settings: [regularGoal(state), shardHuntGoal(state), chaosRushGoal(state), freeOrbsMode(state)],
  };
};

////// Layout section //////
const squareLayout = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Square",
    caption: "A square-ish layout",
    isRadio: true,
    group: SettingsNames.layout,
    value: Layouts.square,
    currentValue: state.currentLayout,
  };
};

const layoutSettings = (state: ISettingsState): ISettingsGroup => {
  return {
    title: "LAYOUT",
    xPosition: 170,
    yPosition: 40,
    settings: [squareLayout(state)],
  };
};

////// Timer section //////
const timerOff = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Off",
    caption: "No timer",
    isRadio: true,
    group: SettingsNames.timerMode,
    value: Toggle.off,
    currentValue: state.currentShowTimer,
  };
};

const timerOn = (state: ISettingsState): ISettingsItem => {
  return {
    name: "On",
    caption: "Show timer (click to start/pause, right-click to reset)",
    isRadio: true,
    group: SettingsNames.timerMode,
    value: Toggle.on,
    currentValue: state.currentShowTimer,
  };
};

const timerSettings = (state: ISettingsState): ISettingsGroup => {
  return {
    title: "TIMER",
    xPosition: 170,
    yPosition: 170,
    settings: [timerOff(state), timerOn(state)],
  };
};

////// Icon era settings //////
const modernNamesAndIcons = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Modern",
    caption: "Use modern (PSP/GBA) icons and names",
    isRadio: true,
    group: SettingsNames.iconSet,
    value: Toggle.on,
    currentValue: state.currentEra,
  };
};

const retroNamesAndIcons = (state: ISettingsState): ISettingsItem => {
  return {
    name: "NES",
    caption: "Use retro (NES) icons and names",
    isRadio: true,
    group: SettingsNames.iconSet,
    value: Toggle.off,
    currentValue: state.currentEra,
  };
};

const eraSettings = (state: ISettingsState): ISettingsGroup => {
  return {
    title: "ERA",
    xPosition: 50,
    yPosition: 170,
    settings: [modernNamesAndIcons(state), retroNamesAndIcons(state)],
  };
};

////// Show icon names setting //////
const alwaysShowNames = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Always",
    caption: "Display names of icons at all times",
    isRadio: true,
    group: SettingsNames.showNames,
    value: ShowNamesSettings.always,
    currentValue: state.currentShowNames,
  };
};

const onHoverShowNames = (state: ISettingsState): ISettingsItem => {
  return {
    name: "On Hover",
    caption: "Display icon's name when mouse hovers over it",
    isRadio: true,
    group: SettingsNames.showNames,
    value: ShowNamesSettings.onHover,
    currentValue: state.currentShowNames,
  };
};

const neverShowNames = (state: ISettingsState): ISettingsItem => {
  return {
    name: "Never",
    caption: "Icon names are only displayed in setting menu caption",
    isRadio: true,
    group: SettingsNames.showNames,
    value: ShowNamesSettings.never,
    currentValue: state.currentShowNames,
  };
};

const showNamesSetting = (state: ISettingsState): ISettingsGroup => {
  return {
    title: "SHOW ICON NAMES",
    xPosition: 270,
    yPosition: 40,
    settings: [alwaysShowNames(state), onHoverShowNames(state), neverShowNames(state)],
  };
};

////// Settings menu collection //////
export const settingsMenu = (state: ISettingsState): ISettingsGroup[] => [
  goalsSettings(state),
  layoutSettings(state),
  timerSettings(state),
  eraSettings(state),
  showNamesSetting(state),
];
