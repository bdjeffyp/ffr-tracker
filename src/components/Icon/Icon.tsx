import * as React from 'react';
import * as Styles from './Icon.style';
import { IIconProps, Toggle } from '../../models';
import { mergeStyles, formatBackgroundPosition } from '../../utils';

export class Icon extends React.Component<IIconProps> {
  private _name = "icon";

  public render() {
    // Build the extended style information from the props
    const currentIconStyle: React.CSSProperties = {
      width: this.props.width,
      height: this.props.height,
      left: this.props.positionX,
      top: this.props.positionY,
    };
    const xImagePosition = formatBackgroundPosition(this.props.state === Toggle.off ? this.props.offStateImageLocationX : this.props.onStateImageLocationX);
    const yImagePosition = formatBackgroundPosition(this.props.state === Toggle.off ? this.props.offStateImageLocationY : this.props.onStateImageLocationY);
    currentIconStyle.backgroundPosition = xImagePosition + " " + yImagePosition;

    return (
      <div id={this._name + this.props.title} style={mergeStyles(Styles.iconStyle, currentIconStyle)}></div>
    )
  }
}
