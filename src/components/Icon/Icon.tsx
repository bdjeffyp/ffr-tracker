import * as React from 'react';
import * as Styles from './Icon.style';
import { IIconProps, Toggle, BASE_X_TWEAK, BASE_Y_TWEAK } from '../../models';
import { mergeStyles, formatBackgroundPosition } from '../../utils';

interface IIconState {
  iconState: Toggle;
  xImagePosition: string;
  yImagePosition: string;
  isHovering: boolean;
}

export class Icon extends React.Component<IIconProps, IIconState> {
  private _name = "icon";

  constructor(props: IIconProps) {
    super(props);
    this.state = {
      iconState: this.props.state,
      xImagePosition: formatBackgroundPosition(this.props.state === Toggle.off ? this.props.offStateImageLocationX : this.props.onStateImageLocationX),
      yImagePosition: formatBackgroundPosition(this.props.state === Toggle.off ? this.props.offStateImageLocationY : this.props.onStateImageLocationY),
      isHovering: false,
    }
  }

  public componentDidUpdate(prevProps: IIconProps) {
    // If any of the icon's props updated, update the state
    if (prevProps !== this.props) {
      this.setState({
        iconState: this.props.state,
        xImagePosition: formatBackgroundPosition(this.props.state === Toggle.off ? this.props.offStateImageLocationX : this.props.onStateImageLocationX),
        yImagePosition: formatBackgroundPosition(this.props.state === Toggle.off ? this.props.offStateImageLocationY : this.props.onStateImageLocationY),
      });
    }
  }

  public render() {
    // Build the extended style information from the props
    const currentIconStyle: React.CSSProperties = {
      width: this.props.width,
      height: this.props.height,
      left: this.props.column * this.props.width,
      top: this.props.row * this.props.height + BASE_Y_TWEAK,
    };
    const xImagePosition = this.state.xImagePosition;
    const yImagePosition = this.state.yImagePosition;
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
      <div
        id={this._name + this.props.title}
        style={mergeStyles(Styles.iconStyle, currentIconStyle)}
        onClick={this._toggleIcon}
        title={this.props.title}
        onMouseEnter={() => this._handleHover(this.props.title)}
        onMouseLeave={() => this._handleHover('')}
      />
    )
  }

  private _handleHover = (caption: string) => {
    this.props.handleHover(caption);
  }

  private _toggleIcon = () => {
    const newState = this.state.iconState === Toggle.off ? Toggle.on : Toggle.off;
    const xImagePosition = formatBackgroundPosition(newState === Toggle.off ? this.props.offStateImageLocationX : this.props.onStateImageLocationX);
    const yImagePosition = formatBackgroundPosition(newState === Toggle.off ? this.props.offStateImageLocationY : this.props.onStateImageLocationY);
    this.setState({ iconState: newState, xImagePosition: xImagePosition, yImagePosition: yImagePosition });
  }
}
