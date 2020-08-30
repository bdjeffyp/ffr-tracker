/**
 * iconProperties -
 * Add/remove icons from here to populate tracker boxes in the trackerProperties.ts file.
 */
import { IIconProps, ISettingsProps, Toggle } from "../models";
import { IItemNames, OriginalItemNames } from "../strings";

////// Constants for image locations and sizes //////
const standardWidthHeight = 64;
const retroBridgeOff = {
  x: 0,
  y: 320,
};
const retroBridgeOn = {
  x: 0,
  y: 256,
};
const luteOff = {
  x: 0,
  y: 448,
};
const luteOn = {
  x: 0,
  y: 384,
};
const crownOff = {
  x: 64,
  y: 448,
};
const crownOn = {
  x: 64,
  y: 384,
};
const crystalEyeOff = {
  x: 128,
  y: 448,
};
const crystalEyeOn = {
  x: 128,
  y: 384,
};
const herbOff = {
  x: 192,
  y: 448,
};
const herbOn = {
  x: 192,
  y: 384,
};
const retroShipOff = {
  x: 128,
  y: 320,
};
const retroShipOn = {
  x: 128,
  y: 256,
};
const keyOff = {
  x: 0,
  y: 576,
};
const keyOn = {
  x: 0,
  y: 512,
};
const tntOff = {
  x: 64,
  y: 576,
};
const tntOn = {
  x: 64,
  y: 512,
};
const rubyOff = {
  x: 128,
  y: 576,
};
const rubyOn = {
  x: 128,
  y: 512,
};
const rodOff = {
  x: 192,
  y: 576,
};
const rodOn = {
  x: 192,
  y: 512,
};
const retroCanalOff = {
  x: 64,
  y: 320,
};
const retroCanalOn = {
  x: 64,
  y: 256,
};
const floaterOff = {
  x: 0,
  y: 704,
};
const floaterOn = {
  x: 0,
  y: 640,
};
const tailOff = {
  x: 64,
  y: 704,
};
const tailOn = {
  x: 64,
  y: 640,
};
const bottleOff = {
  x: 128,
  y: 704,
};
const bottleOn = {
  x: 128,
  y: 640,
};
const oxyaleOff = {
  x: 192,
  y: 704,
};
const oxyaleOn = {
  x: 192,
  y: 640,
};
const retroCanoeOff = {
  x: 192,
  y: 320,
};
const retroCanoeOn = {
  x: 192,
  y: 256,
};
const slabOff = {
  x: 0,
  y: 832,
};
const slabOn = {
  x: 0,
  y: 768,
};
const chimeOff = {
  x: 64,
  y: 832,
};
const chimeOn = {
  x: 64,
  y: 768,
};
const cubeOff = {
  x: 128,
  y: 832,
};
const cubeOn = {
  x: 128,
  y: 768,
};
const adamantOff = {
  x: 192,
  y: 832,
};
const adamantOn = {
  x: 192,
  y: 768,
};
const orbOff = {
  x: 0,
  y: 960,
};
const crystalOff = {
  x: 0,
  y: 896,
};
const earthOrbOn = {
  x: 64,
  y: 960,
};
const earthCrystalOn = {
  x: 64,
  y: 896,
};
const fireOrbOn = {
  x: 128,
  y: 960,
};
const fireCrystalOn = {
  x: 128,
  y: 896,
};
const waterOrbOn = {
  x: 192,
  y: 960,
};
const waterCrystalOn = {
  x: 192,
  y: 896,
};
const airOrbOn = {
  x: 256,
  y: 960,
};
const airCrystalOn = {
  x: 256,
  y: 896,
};
const kingOff = {
  x: 0,
  y: 64,
};
const kingOn = {
  x: 0,
  y: 0,
};
const saraOff = {
  x: 64,
  y: 64,
};
const saraOn = {
  x: 64,
  y: 0,
};
const bikkeOff = {
  x: 128,
  y: 64,
};
const bikkeOn = {
  x: 128,
  y: 0,
};
const sardaOff = {
  x: 192,
  y: 64,
};
const sardaOn = {
  x: 192,
  y: 0,
};
const sagesOff = {
  x: 256,
  y: 64,
};
const sagesOn = {
  x: 256,
  y: 0,
};
const robotOff = {
  x: 320,
  y: 64,
};
const robotOn = {
  x: 320,
  y: 0,
};
const astosOff = {
  x: 0,
  y: 192,
};
const astosOn = {
  x: 0,
  y: 128,
};
const matoyaOff = {
  x: 64,
  y: 192,
};
const matoyaOn = {
  x: 64,
  y: 128,
};
const elfOff = {
  x: 128,
  y: 192,
};
const elfOn = {
  x: 128,
  y: 128,
};
const nerrickOff = {
  x: 192,
  y: 192,
};
const nerrickOn = {
  x: 192,
  y: 128,
};
const smythOff = {
  x: 256,
  y: 192,
};
const smythOn = {
  x: 256,
  y: 128,
};
const lefeinianOff = {
  x: 320,
  y: 192,
};
const lefeinianOn = {
  x: 320,
  y: 128,
};
const shopkeeperOff = {
  x: 384,
  y: 64,
};
const shopkeeperOn = {
  x: 384,
  y: 0,
};
const fairyOff = {
  x: 384,
  y: 192,
};
const fairyOn = {
  x: 384,
  y: 128,
};
const earthShard0 = {
  x: 0,
  y: 1024,
};
const earthShard1 = {
  x: 32,
  y: 1024,
};
const earthShard2 = {
  x: 64,
  y: 1024,
};
const earthShard3 = {
  x: 96,
  y: 1024,
};
const earthShard4 = {
  x: 128,
  y: 1024,
};
const earthShard5 = {
  x: 160,
  y: 1024,
};
const fireShard0 = {
  x: 192,
  y: 1024,
};
const fireShard1 = {
  x: 224,
  y: 1024,
};
const fireShard2 = {
  x: 256,
  y: 1024,
};
const fireShard3 = {
  x: 288,
  y: 1024,
};
const fireShard4 = {
  x: 320,
  y: 1024,
};
const fireShard5 = {
  x: 352,
  y: 1024,
};
const waterShard0 = {
  x: 0,
  y: 1056,
};
const waterShard1 = {
  x: 32,
  y: 1056,
};
const waterShard2 = {
  x: 64,
  y: 1056,
};
const waterShard3 = {
  x: 96,
  y: 1056,
};
const waterShard4 = {
  x: 128,
  y: 1056,
};
const waterShard5 = {
  x: 160,
  y: 1056,
};
const airShard0 = {
  x: 192,
  y: 1056,
};
const airShard1 = {
  x: 224,
  y: 1056,
};
const airShard2 = {
  x: 256,
  y: 1056,
};
const airShard3 = {
  x: 288,
  y: 1056,
};
const airShard4 = {
  x: 320,
  y: 1056,
};
const airShard5 = {
  x: 352,
  y: 1056,
};
const numbersRowOneX = 1088;
const numbersRowTwoX = 1102;
const timesSymbolY = 0;
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

////// Items: row 1 //////
export const bridgeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.bridge,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 0,
    offStateImageLocationX: retroBridgeOff.x,
    offStateImageLocationY: retroBridgeOff.y,
    onStateImageLocationX: retroBridgeOn.x,
    onStateImageLocationY: retroBridgeOn.y,
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
    offStateImageLocationX: luteOff.x,
    offStateImageLocationY: luteOff.y,
    onStateImageLocationX: luteOn.x,
    onStateImageLocationY: luteOn.y,
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
    offStateImageLocationX: crownOff.x,
    offStateImageLocationY: crownOff.y,
    onStateImageLocationX: crownOn.x,
    onStateImageLocationY: crownOn.y,
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
    offStateImageLocationX: crystalEyeOff.x,
    offStateImageLocationY: crystalEyeOff.y,
    onStateImageLocationX: crystalEyeOn.x,
    onStateImageLocationY: crystalEyeOn.y,
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
    offStateImageLocationX: herbOff.x,
    offStateImageLocationY: herbOff.y,
    onStateImageLocationX: herbOn.x,
    onStateImageLocationY: herbOn.y,
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
    offStateImageLocationX: retroShipOff.x,
    offStateImageLocationY: retroShipOff.y,
    onStateImageLocationX: retroShipOn.x,
    onStateImageLocationY: retroShipOn.y,
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
    offStateImageLocationX: keyOff.x,
    offStateImageLocationY: keyOff.y,
    onStateImageLocationX: keyOn.x,
    onStateImageLocationY: keyOn.y,
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
    offStateImageLocationX: tntOff.x,
    offStateImageLocationY: tntOff.y,
    onStateImageLocationX: tntOn.x,
    onStateImageLocationY: tntOn.y,
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
    offStateImageLocationX: rubyOff.x,
    offStateImageLocationY: rubyOff.y,
    onStateImageLocationX: rubyOn.x,
    onStateImageLocationY: rubyOn.y,
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
    offStateImageLocationX: rodOff.x,
    offStateImageLocationY: rodOff.y,
    onStateImageLocationX: rodOn.x,
    onStateImageLocationY: rodOn.y,
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
    offStateImageLocationX: retroCanalOff.x,
    offStateImageLocationY: retroCanalOff.y,
    onStateImageLocationX: retroCanalOn.x,
    onStateImageLocationY: retroCanalOn.y,
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
    offStateImageLocationX: floaterOff.x,
    offStateImageLocationY: floaterOff.y,
    onStateImageLocationX: floaterOn.x,
    onStateImageLocationY: floaterOn.y,
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
    offStateImageLocationX: tailOff.x,
    offStateImageLocationY: tailOff.y,
    onStateImageLocationX: tailOn.x,
    onStateImageLocationY: tailOn.y,
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
    offStateImageLocationX: bottleOff.x,
    offStateImageLocationY: bottleOff.y,
    onStateImageLocationX: bottleOn.x,
    onStateImageLocationY: bottleOn.y,
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
    offStateImageLocationX: oxyaleOff.x,
    offStateImageLocationY: oxyaleOff.y,
    onStateImageLocationX: oxyaleOn.x,
    onStateImageLocationY: oxyaleOn.y,
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
    offStateImageLocationX: retroCanoeOff.x,
    offStateImageLocationY: retroCanoeOff.y,
    onStateImageLocationX: retroCanoeOn.x,
    onStateImageLocationY: retroCanoeOn.y,
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
    offStateImageLocationX: slabOff.x,
    offStateImageLocationY: slabOff.y,
    onStateImageLocationX: slabOn.x,
    onStateImageLocationY: slabOn.y,
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
    offStateImageLocationX: chimeOff.x,
    offStateImageLocationY: chimeOff.y,
    onStateImageLocationX: chimeOn.x,
    onStateImageLocationY: chimeOn.y,
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
    offStateImageLocationX: cubeOff.x,
    offStateImageLocationY: cubeOff.y,
    onStateImageLocationX: cubeOn.x,
    onStateImageLocationY: cubeOn.y,
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
    offStateImageLocationX: adamantOff.x,
    offStateImageLocationY: adamantOff.y,
    onStateImageLocationX: adamantOn.x,
    onStateImageLocationY: adamantOn.y,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

////// Orbs/Crystals //////
export const earthOrb = (names: IItemNames): IIconProps => {
  return {
    title: names.earthOrb,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 0,
    offsetY: 32,
    offStateImageLocationX: names === OriginalItemNames ? orbOff.x : crystalOff.x,
    offStateImageLocationY: names === OriginalItemNames ? orbOff.y : crystalOff.y,
    onStateImageLocationX: names === OriginalItemNames ? earthOrbOn.x : earthCrystalOn.x,
    onStateImageLocationY: names === OriginalItemNames ? earthOrbOn.y : earthCrystalOn.y,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const fireOrb = (names: IItemNames): IIconProps => {
  return {
    title: names.fireOrb,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 0,
    column: 1,
    offsetY: 32,
    offStateImageLocationX: names === OriginalItemNames ? orbOff.x : crystalOff.x,
    offStateImageLocationY: names === OriginalItemNames ? orbOff.y : crystalOff.y,
    onStateImageLocationX: names === OriginalItemNames ? fireOrbOn.x : fireCrystalOn.x,
    onStateImageLocationY: names === OriginalItemNames ? fireOrbOn.y : fireCrystalOn.y,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const waterOrb = (names: IItemNames): IIconProps => {
  return {
    title: names.waterOrb,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 0,
    offsetY: 108,
    offStateImageLocationX: names === OriginalItemNames ? orbOff.x : crystalOff.x,
    offStateImageLocationY: names === OriginalItemNames ? orbOff.y : crystalOff.y,
    onStateImageLocationX: names === OriginalItemNames ? waterOrbOn.x : waterCrystalOn.x,
    onStateImageLocationY: names === OriginalItemNames ? waterOrbOn.y : waterCrystalOn.y,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

export const airOrb = (names: IItemNames): IIconProps => {
  return {
    title: names.airOrb,
    toggleState: Toggle.off,
    width: standardWidthHeight,
    height: standardWidthHeight,
    row: 1,
    column: 1,
    offsetY: 108,
    offStateImageLocationX: names === OriginalItemNames ? orbOff.x : crystalOff.x,
    offStateImageLocationY: names === OriginalItemNames ? orbOff.y : crystalOff.y,
    onStateImageLocationX: names === OriginalItemNames ? airOrbOn.x : airCrystalOn.x,
    onStateImageLocationY: names === OriginalItemNames ? airOrbOn.y : airCrystalOn.y,
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
    offStateImageLocationX: kingOff.x,
    offStateImageLocationY: kingOff.y,
    onStateImageLocationX: kingOn.x,
    onStateImageLocationY: kingOn.y,
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
    offStateImageLocationX: saraOff.x,
    offStateImageLocationY: saraOff.y,
    onStateImageLocationX: saraOn.x,
    onStateImageLocationY: saraOn.y,
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
    offStateImageLocationX: bikkeOff.x,
    offStateImageLocationY: bikkeOff.y,
    onStateImageLocationX: bikkeOn.x,
    onStateImageLocationY: bikkeOn.y,
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
    offStateImageLocationX: sardaOff.x,
    offStateImageLocationY: sardaOff.y,
    onStateImageLocationX: sardaOn.x,
    onStateImageLocationY: sardaOn.y,
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
    offStateImageLocationX: sagesOff.x,
    offStateImageLocationY: sagesOff.y,
    onStateImageLocationX: sagesOn.x,
    onStateImageLocationY: sagesOn.y,
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
    offStateImageLocationX: robotOff.x,
    offStateImageLocationY: robotOff.y,
    onStateImageLocationX: robotOn.x,
    onStateImageLocationY: robotOn.y,
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
    offStateImageLocationX: astosOff.x,
    offStateImageLocationY: astosOff.y,
    onStateImageLocationX: astosOn.x,
    onStateImageLocationY: astosOn.y,
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
    offStateImageLocationX: matoyaOff.x,
    offStateImageLocationY: matoyaOff.y,
    onStateImageLocationX: matoyaOn.x,
    onStateImageLocationY: matoyaOn.y,
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
    offStateImageLocationX: elfOff.x,
    offStateImageLocationY: elfOff.y,
    onStateImageLocationX: elfOn.x,
    onStateImageLocationY: elfOn.y,
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
    offStateImageLocationX: nerrickOff.x,
    offStateImageLocationY: nerrickOff.y,
    onStateImageLocationX: nerrickOn.x,
    onStateImageLocationY: nerrickOn.y,
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
    offStateImageLocationX: smythOff.x,
    offStateImageLocationY: smythOff.y,
    onStateImageLocationX: smythOn.x,
    onStateImageLocationY: smythOn.y,
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
    offStateImageLocationX: lefeinianOff.x,
    offStateImageLocationY: lefeinianOff.y,
    onStateImageLocationX: lefeinianOn.x,
    onStateImageLocationY: lefeinianOn.y,
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
    offStateImageLocationX: shopkeeperOff.x,
    offStateImageLocationY: shopkeeperOff.y,
    onStateImageLocationX: shopkeeperOn.x,
    onStateImageLocationY: shopkeeperOn.y,
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
    offStateImageLocationX: fairyOff.x,
    offStateImageLocationY: fairyOff.y,
    onStateImageLocationX: fairyOn.x,
    onStateImageLocationY: fairyOn.y,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  };
};

////// Shard hunt stuff //////
// export const shardIcon = (names: IItemNames): IIconProps => {
//   return {
//     title: names.shards,
//   };
// };
