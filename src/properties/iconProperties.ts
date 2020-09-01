/**
 * iconProperties -
 * Add/remove icons from here to populate tracker boxes in the trackerProperties.ts file.
 */
import { ICoordinates, IIconProps, ISettingsProps, Toggle } from "../models";
import { IItemNames } from "../strings";

////// Constants for image locations and sizes //////
const standardWidthHeight = 64;
const shardWidthHeight = 32;
const textHeight = 14;
const slashSymbolWidth = 10; // Add one pixel to each side of the image. Should make larger if that is too close...

const retroBridgeOff: ICoordinates = {
  x: 0,
  y: 320,
};
const retroBridgeOn: ICoordinates = {
  x: 0,
  y: 256,
};
const luteOff: ICoordinates = {
  x: 0,
  y: 448,
};
const luteOn: ICoordinates = {
  x: 0,
  y: 384,
};
const crownOff: ICoordinates = {
  x: 64,
  y: 448,
};
const crownOn: ICoordinates = {
  x: 64,
  y: 384,
};
const crystalEyeOff: ICoordinates = {
  x: 128,
  y: 448,
};
const crystalEyeOn: ICoordinates = {
  x: 128,
  y: 384,
};
const herbOff: ICoordinates = {
  x: 192,
  y: 448,
};
const herbOn: ICoordinates = {
  x: 192,
  y: 384,
};
const retroShipOff: ICoordinates = {
  x: 128,
  y: 320,
};
const retroShipOn: ICoordinates = {
  x: 128,
  y: 256,
};
const keyOff: ICoordinates = {
  x: 0,
  y: 576,
};
const keyOn: ICoordinates = {
  x: 0,
  y: 512,
};
const tntOff: ICoordinates = {
  x: 64,
  y: 576,
};
const tntOn: ICoordinates = {
  x: 64,
  y: 512,
};
const rubyOff: ICoordinates = {
  x: 128,
  y: 576,
};
const rubyOn: ICoordinates = {
  x: 128,
  y: 512,
};
const rodOff: ICoordinates = {
  x: 192,
  y: 576,
};
const rodOn: ICoordinates = {
  x: 192,
  y: 512,
};
const retroCanalOff: ICoordinates = {
  x: 64,
  y: 320,
};
const retroCanalOn: ICoordinates = {
  x: 64,
  y: 256,
};
const floaterOff: ICoordinates = {
  x: 0,
  y: 704,
};
const floaterOn: ICoordinates = {
  x: 0,
  y: 640,
};
const tailOff: ICoordinates = {
  x: 64,
  y: 704,
};
const tailOn: ICoordinates = {
  x: 64,
  y: 640,
};
const bottleOff: ICoordinates = {
  x: 128,
  y: 704,
};
const bottleOn: ICoordinates = {
  x: 128,
  y: 640,
};
const oxyaleOff: ICoordinates = {
  x: 192,
  y: 704,
};
const oxyaleOn: ICoordinates = {
  x: 192,
  y: 640,
};
const retroCanoeOff: ICoordinates = {
  x: 192,
  y: 320,
};
const retroCanoeOn: ICoordinates = {
  x: 192,
  y: 256,
};
const slabOff: ICoordinates = {
  x: 0,
  y: 832,
};
const slabOn: ICoordinates = {
  x: 0,
  y: 768,
};
const chimeOff: ICoordinates = {
  x: 64,
  y: 832,
};
const chimeOn: ICoordinates = {
  x: 64,
  y: 768,
};
const cubeOff: ICoordinates = {
  x: 128,
  y: 832,
};
const cubeOn: ICoordinates = {
  x: 128,
  y: 768,
};
const adamantOff: ICoordinates = {
  x: 192,
  y: 832,
};
const adamantOn: ICoordinates = {
  x: 192,
  y: 768,
};
const orbOff: ICoordinates = {
  x: 0,
  y: 960,
};
const crystalOff: ICoordinates = {
  x: 0,
  y: 896,
};
const earthOrbOn: ICoordinates = {
  x: 64,
  y: 960,
};
const earthCrystalOn: ICoordinates = {
  x: 64,
  y: 896,
};
const fireOrbOn: ICoordinates = {
  x: 128,
  y: 960,
};
const fireCrystalOn: ICoordinates = {
  x: 128,
  y: 896,
};
const waterOrbOn: ICoordinates = {
  x: 192,
  y: 960,
};
const waterCrystalOn: ICoordinates = {
  x: 192,
  y: 896,
};
const airOrbOn: ICoordinates = {
  x: 256,
  y: 960,
};
const airCrystalOn: ICoordinates = {
  x: 256,
  y: 896,
};
const kingOff: ICoordinates = {
  x: 0,
  y: 64,
};
const kingOn: ICoordinates = {
  x: 0,
  y: 0,
};
const saraOff: ICoordinates = {
  x: 64,
  y: 64,
};
const saraOn: ICoordinates = {
  x: 64,
  y: 0,
};
const bikkeOff: ICoordinates = {
  x: 128,
  y: 64,
};
const bikkeOn: ICoordinates = {
  x: 128,
  y: 0,
};
const sardaOff: ICoordinates = {
  x: 192,
  y: 64,
};
const sardaOn: ICoordinates = {
  x: 192,
  y: 0,
};
const sagesOff: ICoordinates = {
  x: 256,
  y: 64,
};
const sagesOn: ICoordinates = {
  x: 256,
  y: 0,
};
const robotOff: ICoordinates = {
  x: 320,
  y: 64,
};
const robotOn: ICoordinates = {
  x: 320,
  y: 0,
};
const astosOff: ICoordinates = {
  x: 0,
  y: 192,
};
const astosOn: ICoordinates = {
  x: 0,
  y: 128,
};
const matoyaOff: ICoordinates = {
  x: 64,
  y: 192,
};
const matoyaOn: ICoordinates = {
  x: 64,
  y: 128,
};
const elfOff: ICoordinates = {
  x: 128,
  y: 192,
};
const elfOn: ICoordinates = {
  x: 128,
  y: 128,
};
const nerrickOff: ICoordinates = {
  x: 192,
  y: 192,
};
const nerrickOn: ICoordinates = {
  x: 192,
  y: 128,
};
const smythOff: ICoordinates = {
  x: 256,
  y: 192,
};
const smythOn: ICoordinates = {
  x: 256,
  y: 128,
};
const lefeinianOff: ICoordinates = {
  x: 320,
  y: 192,
};
const lefeinianOn: ICoordinates = {
  x: 320,
  y: 128,
};
const shopkeeperOff: ICoordinates = {
  x: 384,
  y: 64,
};
const shopkeeperOn: ICoordinates = {
  x: 384,
  y: 0,
};
const fairyOff: ICoordinates = {
  x: 384,
  y: 192,
};
const fairyOn: ICoordinates = {
  x: 384,
  y: 128,
};
const earthShard0: ICoordinates = {
  x: 0,
  y: 1024,
};
const earthShard1: ICoordinates = {
  x: 32,
  y: 1024,
};
const earthShard2: ICoordinates = {
  x: 64,
  y: 1024,
};
const earthShard3: ICoordinates = {
  x: 96,
  y: 1024,
};
const earthShard4: ICoordinates = {
  x: 128,
  y: 1024,
};
const earthShard5: ICoordinates = {
  x: 160,
  y: 1024,
};
const fireShard0: ICoordinates = {
  x: 192,
  y: 1024,
};
const fireShard1: ICoordinates = {
  x: 224,
  y: 1024,
};
const fireShard2: ICoordinates = {
  x: 256,
  y: 1024,
};
const fireShard3: ICoordinates = {
  x: 288,
  y: 1024,
};
const fireShard4: ICoordinates = {
  x: 320,
  y: 1024,
};
const fireShard5: ICoordinates = {
  x: 352,
  y: 1024,
};
const waterShard0: ICoordinates = {
  x: 0,
  y: 1056,
};
const waterShard1: ICoordinates = {
  x: 32,
  y: 1056,
};
const waterShard2: ICoordinates = {
  x: 64,
  y: 1056,
};
const waterShard3: ICoordinates = {
  x: 96,
  y: 1056,
};
const waterShard4: ICoordinates = {
  x: 128,
  y: 1056,
};
const waterShard5: ICoordinates = {
  x: 160,
  y: 1056,
};
const airShard0: ICoordinates = {
  x: 192,
  y: 1056,
};
const airShard1: ICoordinates = {
  x: 224,
  y: 1056,
};
const airShard2: ICoordinates = {
  x: 256,
  y: 1056,
};
const airShard3: ICoordinates = {
  x: 288,
  y: 1056,
};
const airShard4: ICoordinates = {
  x: 320,
  y: 1056,
};
const airShard5: ICoordinates = {
  x: 352,
  y: 1056,
};

const numbersRowOneX = 1088;
const numbersRowTwoX = 1102;
// const timesSymbolY = 0;
const zeroY = 10;
const oneY = 20;
const twoY = 30;
const threeY = 40;
const fourY = 50;
const fiveY = 60;
const sixY = 70;
const sevenY = 80;
const eightY = 90;
const nineY = 100;
const tenY = 110;
const elevenY = 127;
const twelveY = 140;
const thirteenY = 157;
const fourteenY = 174;
const fifteenY = 191;
const sixteenY = 208;
const seventeenY = 225;
const eighteenY = 242;
const nineteenY = 259;
const twentyY = 276;
const twentyOneY = 297;
const twentyTwoY = 314;
const twentyThreeY = 335;
const twentyFourY = 356;
const twentyFiveY = 377;
const twentySixY = 398;
const twentySevenY = 419;
const twentyEightY = 440;
const twentyNineY = 461;
const thirtyY = 0;
const thirtyOneY = 21;
const thirtyTwoY = 38;
const thirtyThreeY = 59;
const thirtyFourY = 80;
const thirtyFiveY = 101;
const thirtySixY = 122;
const slashSymbolY = 143;
const plusSymbolY = 151;
const minusSymbolY = 163;
const numbersCollection: ICoordinates[] = [
  { x: numbersRowOneX, y: zeroY },
  { x: numbersRowOneX, y: oneY },
  { x: numbersRowOneX, y: twoY },
  { x: numbersRowOneX, y: threeY },
  { x: numbersRowOneX, y: fourY },
  { x: numbersRowOneX, y: fiveY },
  { x: numbersRowOneX, y: sixY },
  { x: numbersRowOneX, y: sevenY },
  { x: numbersRowOneX, y: eightY },
  { x: numbersRowOneX, y: nineY },
  { x: numbersRowOneX, y: tenY },
  { x: numbersRowOneX, y: elevenY },
  { x: numbersRowOneX, y: twelveY },
  { x: numbersRowOneX, y: thirteenY },
  { x: numbersRowOneX, y: fourteenY },
  { x: numbersRowOneX, y: fifteenY },
  { x: numbersRowOneX, y: sixteenY },
  { x: numbersRowOneX, y: seventeenY },
  { x: numbersRowOneX, y: eighteenY },
  { x: numbersRowOneX, y: nineteenY },
  { x: numbersRowOneX, y: twentyY },
  { x: numbersRowOneX, y: twentyOneY },
  { x: numbersRowOneX, y: twentyTwoY },
  { x: numbersRowOneX, y: twentyThreeY },
  { x: numbersRowOneX, y: twentyFourY },
  { x: numbersRowOneX, y: twentyFiveY },
  { x: numbersRowOneX, y: twentySixY },
  { x: numbersRowOneX, y: twentySevenY },
  { x: numbersRowOneX, y: twentyEightY },
  { x: numbersRowOneX, y: twentyNineY },
  { x: numbersRowTwoX, y: thirtyY },
  { x: numbersRowTwoX, y: thirtyOneY },
  { x: numbersRowTwoX, y: thirtyTwoY },
  { x: numbersRowTwoX, y: thirtyThreeY },
  { x: numbersRowTwoX, y: thirtyFourY },
  { x: numbersRowTwoX, y: thirtyFiveY },
  { x: numbersRowTwoX, y: thirtySixY },
];

////// Items: row 1 //////
export const bridgeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.bridge,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 0,
    stateImageLocations: [retroBridgeOff, retroBridgeOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const luteIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.lute,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 1,
    stateImageLocations: [luteOff, luteOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const crownIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.crown,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 2,
    stateImageLocations: [crownOff, crownOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const crystalEyeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.crystal,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 3,
    stateImageLocations: [crystalEyeOff, crystalEyeOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const herbIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.herb,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 4,
    stateImageLocations: [herbOff, herbOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

////// Items: row 2 //////
export const shipIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.ship,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 0,
    stateImageLocations: [retroShipOff, retroShipOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const keyIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.key,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 1,
    stateImageLocations: [keyOff, keyOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const tntIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.tnt,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 2,
    stateImageLocations: [tntOff, tntOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const rubyIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.ruby,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 3,
    stateImageLocations: [rubyOff, rubyOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const rodIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.rod,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 4,
    stateImageLocations: [rodOff, rodOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

////// Items: row 3 //////
export const canalIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.canal,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 2,
    column: 0,
    stateImageLocations: [retroCanalOff, retroCanalOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const floaterIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.floater,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 2,
    column: 1,
    stateImageLocations: [floaterOff, floaterOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const tailIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.tail,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 2,
    column: 2,
    stateImageLocations: [tailOff, tailOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const bottleIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.bottle,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 2,
    column: 3,
    stateImageLocations: [bottleOff, bottleOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const oxyaleIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.oxyale,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 2,
    column: 4,
    stateImageLocations: [oxyaleOff, oxyaleOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

////// Items: row 4 //////
export const canoeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.canoe,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 3,
    column: 0,
    stateImageLocations: [retroCanoeOff, retroCanoeOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const slabIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.slab,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 3,
    column: 1,
    stateImageLocations: [slabOff, slabOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const chimeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.chime,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 3,
    column: 2,
    stateImageLocations: [chimeOff, chimeOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const cubeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.cube,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 3,
    column: 3,
    stateImageLocations: [cubeOff, cubeOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const adamantIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.adamant,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 3,
    column: 4,
    stateImageLocations: [adamantOff, adamantOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

////// Orbs/Crystals //////
export const earthOrb = (names: IItemNames, showCrystals: boolean): IIconProps => {
  return {
    title: names.earthOrb,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 0,
    offsetY: 32, // shift down
    stateImageLocations: [showCrystals ? crystalOff : orbOff, showCrystals ? earthCrystalOn : earthOrbOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const fireOrb = (names: IItemNames, showCrystals: boolean): IIconProps => {
  return {
    title: names.fireOrb,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 1,
    offsetY: 32, // shift down
    stateImageLocations: [showCrystals ? crystalOff : orbOff, showCrystals ? fireCrystalOn : fireOrbOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const waterOrb = (names: IItemNames, showCrystals: boolean): IIconProps => {
  return {
    title: names.waterOrb,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 0,
    offsetY: 108, // shift WAY down
    stateImageLocations: [showCrystals ? crystalOff : orbOff, showCrystals ? waterCrystalOn : waterOrbOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const airOrb = (names: IItemNames, showCrystals: boolean): IIconProps => {
  return {
    title: names.airOrb,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 1,
    offsetY: 108, // shift WAY down
    stateImageLocations: [showCrystals ? crystalOff : orbOff, showCrystals ? airCrystalOn : airOrbOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

////// Main quest NPCs //////
export const kingIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.king,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 0,
    stateImageLocations: [kingOff, kingOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const saraIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.sara,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 1,
    stateImageLocations: [saraOff, saraOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const bikkeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.bikke,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 2,
    stateImageLocations: [bikkeOff, bikkeOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const sardaIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.sarda,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 3,
    stateImageLocations: [sardaOff, sardaOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const sagesIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.sages,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 4,
    stateImageLocations: [sagesOff, sagesOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const robotIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.robot,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 5,
    stateImageLocations: [robotOff, robotOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

////// Fetch quest NPCs //////
export const astosIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.astos,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 0,
    stateImageLocations: [astosOff, astosOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const matoyaIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.matoya,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 1,
    stateImageLocations: [matoyaOff, matoyaOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const elfIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.elf,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 2,
    stateImageLocations: [elfOff, elfOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const nerrickIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.nerrick,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 3,
    stateImageLocations: [nerrickOff, nerrickOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const smythIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.smyth,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 4,
    stateImageLocations: [smythOff, smythOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const lefeinianIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.lefeinian,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 5,
    stateImageLocations: [lefeinianOff, lefeinianOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

////// Shopkeeper and fairy //////
export const shopkeeperIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.shopkeeper,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 6,
    offsetX: 68,
    stateImageLocations: [shopkeeperOff, shopkeeperOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const fairyIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.fairy,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 6,
    offsetX: 68,
    stateImageLocations: [fairyOff, fairyOn],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

////// Shard hunt stuff //////
// Layout will be something like this:
// row 0 - Image of shards top center
// row 1 - shardsFound slashSymbol requiredShards
// row 2 - blank
// row 3 - plusSymbol slashSymbol minusSymbol
/** Images of the shards */
export const shardIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.shards,
    width: shardWidthHeight,
    height: shardWidthHeight,
    row: 0,
    column: 0,
    stateImageLocations: [earthShard0, earthShard1],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

/** Number of shards found */
export const shardsFoundIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.shardsFound,
    width: standardWidthHeight,
    height: textHeight,
    row: 1,
    column: 0,
    stateImageLocations: numbersCollection,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

/**
 * Divider that appears between shards found and required, as well as the Plus and Minus icons
 * @param row zero-based index for positioning the slash
 * @param column zero-based index for positioning the slash
 */
export const slashSymbolIcon = (row: number, column: number): IIconProps => {
  return {
    title: "",
    width: slashSymbolWidth,
    height: textHeight,
    row: row,
    column: column,
    stateImageLocations: [{ x: numbersRowTwoX, y: slashSymbolY }],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

/** Number of shards the player needs to find */
export const requiredShardsIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.requiredShards,
    width: standardWidthHeight,
    height: textHeight,
    row: 1,
    column: 2,
    stateImageLocations: numbersCollection,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

/** Plus symbol to increment the required number of shards to find */
export const addShardIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.addShard,
    width: standardWidthHeight,
    height: textHeight,
    row: 2,
    column: 0,
    stateImageLocations: [{ x: numbersRowTwoX, y: plusSymbolY }],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

/** Minus symbol to decrement the required number of shards to find */
export const removeShardIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.removeShard,
    width: standardWidthHeight,
    height: textHeight,
    row: 2,
    column: 2,
    stateImageLocations: [{ x: numbersRowTwoX, y: minusSymbolY }],
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};
