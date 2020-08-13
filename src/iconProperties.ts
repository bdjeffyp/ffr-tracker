/**
 * iconProperties -
 * Add/remove icons from here to populate tracker boxes in the trackerProperties.ts file.
 */
import { IIconProps, Toggle } from "./models";

export const bridgeIcon: IIconProps = {
  title: "Bridge",
  state: Toggle.off,
  width: 64,
  height: 64,
  positionX: 0,
  positionY: 0,
  offStateImageLocationX: 0,
  offStateImageLocationY: 320,
  onStateImageLocationX: 0,
  onStateImageLocationY: 256,
}
