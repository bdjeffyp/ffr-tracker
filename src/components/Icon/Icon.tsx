import * as React from 'react';
import * as Styles from './Icon.style';
import { IIconProps, Toggle, BASE_X_TWEAK, BASE_Y_TWEAK, IconNameType } from '../../models';
import { mergeStyles, formatBackgroundPosition } from '../../utils';
import { IItemNames, ModernItemNames, OriginalItemNames } from '../../strings';

export class Icon extends React.Component<IIconProps> {
  private _name = "icon";

  public render() {
    // Build the extended style information from the props
    const currentIconStyle: React.CSSProperties = {
      width: this.props.width,
      height: this.props.height,
      left: this.props.column * this.props.width,
      top: this.props.row * this.props.height + BASE_Y_TWEAK,
    };
    const xImagePosition = formatBackgroundPosition(this.props.state === Toggle.off ? this.props.offStateImageLocationX : this.props.onStateImageLocationX);
    const yImagePosition = formatBackgroundPosition(this.props.state === Toggle.off ? this.props.offStateImageLocationY : this.props.onStateImageLocationY);
    currentIconStyle.backgroundPosition = xImagePosition + " " + yImagePosition;

    // Tweak the position, if desired.
    let left = currentIconStyle.left as number;
    let top = currentIconStyle.top as number;
    if (this.props.offsetX) {
      left += this.props.offsetX;
    }
    if (this.props.offsetY) {
      top += this.props.offsetY;
    }
    // Apply the base tweak
    left += this.props.column * BASE_X_TWEAK;
    top += this.props.row * BASE_Y_TWEAK;
    currentIconStyle.left = left;
    currentIconStyle.top = top;

    return (
      <div id={this._name + this.props.title} style={mergeStyles(Styles.iconStyle, currentIconStyle)}></div>
    )
  }
}
