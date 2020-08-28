/**
 * iconProperties -
 * Add/remove icons from here to populate tracker boxes in the trackerProperties.ts file.
 */
import { IIconProps, Toggle, ISettingsProps } from "../models";
import { IItemNames, OriginalItemNames } from '../strings';

////// Items: row 1 //////
export const bridgeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.bridge,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 0,
    offStateImageLocationX: 0,
    offStateImageLocationY: 320,
    onStateImageLocationX: 0,
    onStateImageLocationY: 256,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const luteIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.lute,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 1,
    offStateImageLocationX: 0,
    offStateImageLocationY: 448,
    onStateImageLocationX: 0,
    onStateImageLocationY: 384,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const crownIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.crown,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 2,
    offStateImageLocationX: 64,
    offStateImageLocationY: 448,
    onStateImageLocationX: 64,
    onStateImageLocationY: 384,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const crystalEyeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.crystal,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 3,
    offStateImageLocationX: 128,
    offStateImageLocationY: 448,
    onStateImageLocationX: 128,
    onStateImageLocationY: 384,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const herbIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.herb,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 4,
    offStateImageLocationX: 192,
    offStateImageLocationY: 448,
    onStateImageLocationX: 192,
    onStateImageLocationY: 384,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

////// Items: row 2 //////
export const shipIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.ship,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 0,
    offStateImageLocationX: 128,
    offStateImageLocationY: 320,
    onStateImageLocationX: 128,
    onStateImageLocationY: 256,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const keyIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.key,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 1,
    offStateImageLocationX: 0,
    offStateImageLocationY: 576,
    onStateImageLocationX: 0,
    onStateImageLocationY: 512,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const tntIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.tnt,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 2,
    offStateImageLocationX: 64,
    offStateImageLocationY: 576,
    onStateImageLocationX: 64,
    onStateImageLocationY: 512,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const rubyIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.ruby,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 3,
    offStateImageLocationX: 128,
    offStateImageLocationY: 576,
    onStateImageLocationX: 128,
    onStateImageLocationY: 512,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const rodIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.rod,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 4,
    offStateImageLocationX: 192,
    offStateImageLocationY: 576,
    onStateImageLocationX: 192,
    onStateImageLocationY: 512,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

////// Items: row 3 //////
export const canalIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.canal,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 2,
    column: 0,
    offStateImageLocationX: 64,
    offStateImageLocationY: 320,
    onStateImageLocationX: 64,
    onStateImageLocationY: 256,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const floaterIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.floater,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 2,
    column: 1,
    offStateImageLocationX: 0,
    offStateImageLocationY: 704,
    onStateImageLocationX: 0,
    onStateImageLocationY: 640,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const tailIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.tail,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 2,
    column: 2,
    offStateImageLocationX: 64,
    offStateImageLocationY: 704,
    onStateImageLocationX: 64,
    onStateImageLocationY: 640,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const bottleIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.bottle,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 2,
    column: 3,
    offStateImageLocationX: 128,
    offStateImageLocationY: 704,
    onStateImageLocationX: 128,
    onStateImageLocationY: 640,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const oxyaleIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.oxyale,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 2,
    column: 4,
    offStateImageLocationX: 192,
    offStateImageLocationY: 704,
    onStateImageLocationX: 192,
    onStateImageLocationY: 640,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

////// Items: row 4 //////
export const canoeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.canoe,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 3,
    column: 0,
    offStateImageLocationX: 192,
    offStateImageLocationY: 320,
    onStateImageLocationX: 192,
    onStateImageLocationY: 256,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const slabIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.slab,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 3,
    column: 1,
    offStateImageLocationX: 0,
    offStateImageLocationY: 832,
    onStateImageLocationX: 0,
    onStateImageLocationY: 768,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const chimeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.chime,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 3,
    column: 2,
    offStateImageLocationX: 64,
    offStateImageLocationY: 832,
    onStateImageLocationX: 64,
    onStateImageLocationY: 768,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const cubeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.cube,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 3,
    column: 3,
    offStateImageLocationX: 128,
    offStateImageLocationY: 832,
    onStateImageLocationX: 128,
    onStateImageLocationY: 768,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const adamantIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.adamant,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 3,
    column: 4,
    offStateImageLocationX: 192,
    offStateImageLocationY: 832,
    onStateImageLocationX: 192,
    onStateImageLocationY: 768,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

////// Orbs/Crystals //////
export const earthOrb = (names: IItemNames): IIconProps => {
  return {
    title: names.earthOrb,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 0,
    offsetY: 32,
    offStateImageLocationX: 0,
    offStateImageLocationY: names === OriginalItemNames ? 960 : 896,
    onStateImageLocationX: 64,
    onStateImageLocationY: names === OriginalItemNames ? 960 : 896,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const fireOrb = (names: IItemNames): IIconProps => {
  return {
    title: names.fireOrb,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 1,
    offsetY: 32,
    offStateImageLocationX: 0,
    offStateImageLocationY: names === OriginalItemNames ? 960 : 896,
    onStateImageLocationX: 128,
    onStateImageLocationY: names === OriginalItemNames ? 960 : 896,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const waterOrb = (names: IItemNames): IIconProps => {
  return {
    title: names.waterOrb,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 0,
    offsetY: 108,
    offStateImageLocationX: 0,
    offStateImageLocationY: names === OriginalItemNames ? 960 : 896,
    onStateImageLocationX: 192,
    onStateImageLocationY: names === OriginalItemNames ? 960 : 896,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const airOrb = (names: IItemNames): IIconProps => {
  return {
    title: names.airOrb,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 1,
    offsetY: 108,
    offStateImageLocationX: 0,
    offStateImageLocationY: names === OriginalItemNames ? 960 : 896,
    onStateImageLocationX: 256,
    onStateImageLocationY: names === OriginalItemNames ? 960 : 896,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

////// Main quest NPCs //////
export const kingIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.king,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 0,
    offStateImageLocationX: 0,
    offStateImageLocationY: 64,
    onStateImageLocationX: 0,
    onStateImageLocationY: 0,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const saraIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.sara,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 1,
    offStateImageLocationX: 64,
    offStateImageLocationY: 64,
    onStateImageLocationX: 64,
    onStateImageLocationY: 0,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const bikkeIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.bikke,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 2,
    offStateImageLocationX: 128,
    offStateImageLocationY: 64,
    onStateImageLocationX: 128,
    onStateImageLocationY: 0,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const sardaIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.sarda,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 3,
    offStateImageLocationX: 192,
    offStateImageLocationY: 64,
    onStateImageLocationX: 192,
    onStateImageLocationY: 0,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const sagesIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.sages,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 4,
    offStateImageLocationX: 256,
    offStateImageLocationY: 64,
    onStateImageLocationX: 256,
    onStateImageLocationY: 0,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const robotIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.robot,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 5,
    offStateImageLocationX: 320,
    offStateImageLocationY: 64,
    onStateImageLocationX: 320,
    onStateImageLocationY: 0,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

////// Fetch quest NPCs //////
export const astosIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.astos,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 0,
    offStateImageLocationX: 0,
    offStateImageLocationY: 192,
    onStateImageLocationX: 0,
    onStateImageLocationY: 128,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const matoyaIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.matoya,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 1,
    offStateImageLocationX: 64,
    offStateImageLocationY: 192,
    onStateImageLocationX: 64,
    onStateImageLocationY: 128,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const elfIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.elf,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 2,
    offStateImageLocationX: 128,
    offStateImageLocationY: 192,
    onStateImageLocationX: 128,
    onStateImageLocationY: 128,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const nerrickIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.nerrick,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 3,
    offStateImageLocationX: 192,
    offStateImageLocationY: 192,
    onStateImageLocationX: 192,
    onStateImageLocationY: 128,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const smythIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.smyth,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 4,
    offStateImageLocationX: 256,
    offStateImageLocationY: 192,
    onStateImageLocationX: 256,
    onStateImageLocationY: 128,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const lefeinianIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.lefeinian,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 5,
    offStateImageLocationX: 320,
    offStateImageLocationY: 192,
    onStateImageLocationX: 320,
    onStateImageLocationY: 128,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

////// Shopkeeper and fairy //////
export const shopkeeperIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.shopkeeper,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 0,
    column: 6,
    offsetX: 68,
    offStateImageLocationX: 384,
    offStateImageLocationY: 64,
    onStateImageLocationX: 384,
    onStateImageLocationY: 0,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}

export const fairyIcon = (names: IItemNames): IIconProps => {
  return {
    title: names.fairy,
    state: Toggle.off,
    width: 64,
    height: 64,
    row: 1,
    column: 6,
    offsetX: 68,
    offStateImageLocationX: 384,
    offStateImageLocationY: 192,
    onStateImageLocationX: 384,
    onStateImageLocationY: 128,
    // empty props
    settings: {} as ISettingsProps,
    handleHover: () => {},
  }
}
