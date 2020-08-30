import * as React from "react";
import { BASE_X_TWEAK, BASE_Y_TWEAK, IIconProps, Toggle, OFF_STATE_INDEX, ON_STATE_INDEX } from "../../models";
import { formatBackgroundPosition, mergeStyles } from "../../utils";
import * as Styles from "./Icon.style";

interface IIconState {
  toggleState?: Toggle;
  xImagePosition: string;
  yImagePosition: string;
  isHovering: boolean;
}

export class Icon extends React.Component<IIconProps, IIconState> {
  private _name = "icon";

  constructor(props: IIconProps) {
    super(props);
    this.state = {
      toggleState: this.props.toggleState,
      xImagePosition: formatBackgroundPosition(
        this.props.toggleState === Toggle.off ? this.props.stateImageLocations[OFF_STATE_INDEX].x : this.props.stateImageLocations[ON_STATE_INDEX].x
      ),
      yImagePosition: formatBackgroundPosition(
        this.props.toggleState === Toggle.off ? this.props.stateImageLocations[OFF_STATE_INDEX].y : this.props.stateImageLocations[ON_STATE_INDEX].y
      ),
      isHovering: false,
    };
  }

  public componentDidUpdate(prevProps: IIconProps) {
    // If any of the icon's props updated, update the state
    // TODO: Need to update how we do this since we are having more states than just two and toggleState isn't guaranteed
    // TODO(con't): Perhaps check for toggleState, or other state tracking methods that exist in the future.
    if (prevProps.stateImageLocations[OFF_STATE_INDEX].x !== this.props.stateImageLocations[OFF_STATE_INDEX].x || prevProps.stateImageLocations[ON_STATE_INDEX].x !== this.props.stateImageLocations[ON_STATE_INDEX].x) {
      this.setState({
        xImagePosition: formatBackgroundPosition(
          this.props.toggleState === Toggle.off ? this.props.stateImageLocations[OFF_STATE_INDEX].x : this.props.stateImageLocations[ON_STATE_INDEX].x
        ),
      });
    }
    if (prevProps.stateImageLocations[OFF_STATE_INDEX].y !== this.props.stateImageLocations[OFF_STATE_INDEX].y || prevProps.stateImageLocations[ON_STATE_INDEX].y !== this.props.stateImageLocations[ON_STATE_INDEX].y) {
      this.setState({
        yImagePosition: formatBackgroundPosition(
          this.props.toggleState === Toggle.off ? this.props.stateImageLocations[OFF_STATE_INDEX].y : this.props.stateImageLocations[ON_STATE_INDEX].y
        ),
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
        onMouseLeave={() => this._handleHover("")}
      />
    );
  }

  private _handleHover = (caption: string) => {
    this.props.handleHover(caption);
  };

  private _toggleIcon = () => {
    const newState = this.state.toggleState === Toggle.off ? Toggle.on : Toggle.off;
    // TODO: Need to update how we do this since we are having more states than just two and toggleState isn't guaranteed
    // TODO(con't): Perhaps check for toggleState, or other state tracking methods that exist in the future.
    const xImagePosition = formatBackgroundPosition(
      newState === Toggle.off ? this.props.stateImageLocations[OFF_STATE_INDEX].x : this.props.stateImageLocations[ON_STATE_INDEX].x
    );
    const yImagePosition = formatBackgroundPosition(
      newState === Toggle.off ? this.props.stateImageLocations[OFF_STATE_INDEX].y : this.props.stateImageLocations[ON_STATE_INDEX].y
    );
    this.setState({ toggleState: newState, xImagePosition: xImagePosition, yImagePosition: yImagePosition });
  };
}
