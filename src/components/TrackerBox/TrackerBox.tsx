import * as React from 'react';
import * as Styles from './TrackerBox.style';
import { ITrackerBoxProps, Borders, IIconProps, Toggle } from '../../models';
import { mergeStyles, formatBackgroundPosition, centerObject } from '../../utils';
import thickBorderImage from '../../images/borderThick.png';
import thinBorderImage from '../../images/borderThin.png';
import { Icon } from '../Icon/Icon';
import { Timer } from './Timer';

interface IExtendedBoxProps {
  /** Border to render for this box */
  border: Borders;
}

interface ITrackerBoxState {
  titleImageLocationX: number;
  titleImageLocationY: number;
  titleWidth: number;
}

export class TrackerBox extends React.Component<ITrackerBoxProps & IExtendedBoxProps, ITrackerBoxState> {
  private _name = "tracker";

  constructor(props: ITrackerBoxProps & IExtendedBoxProps) {
    super(props);
    this.state = {
      titleImageLocationX: 0,
      titleImageLocationY: 0,
      titleWidth: 0,
    };
  }

  public componentDidMount() {
    this.setState({
      titleImageLocationX: this.props.titleImageLocationX,
      titleImageLocationY: this.props.titleImageLocationY,
      titleWidth: this.props.titleWidth,
    });
  }

  public componentDidUpdate(prevProps: ITrackerBoxProps & IExtendedBoxProps) {
    if (prevProps !== this.props) {
      this.setState({
        titleImageLocationX: this.props.titleImageLocationX,
        titleImageLocationY: this.props.titleImageLocationY,
        titleWidth: this.props.titleWidth,
      })
    }
  }

  public render() {
    // Build the extended style information from the props
    let borderImage = "";
    let borderWidth = 1;
    switch (this.props.border) {
      case Borders.thick:
        borderImage = `url(${thickBorderImage}) 28 round`;
        borderWidth = 28;
        break;
      case Borders.thin:
        borderImage = `url(${thinBorderImage}) 20 round`;
        borderWidth = 20;
        break;
      default:
        borderImage = "none";
        borderWidth = 1;
        break;
    }
    const currentTrackerBoxStyle: React.CSSProperties = {
      left: this.props.boxPositionX,
      top: this.props.boxPositionY,
      width: this.props.boxWidth,
      height: this.props.boxHeight,
      borderImage: borderImage,
      borderWidth: borderWidth,
      display: this.props.visible ? "inline" : "none",
    };

    // If the timer options are available, add the extended style options
    const extendedTrackerBoxStyle: React.CSSProperties = {
      fontSize: this.props.fontSize,
      fontWeight: this.props.fontWeight,
      textAlign: this.props.textAlign as any,
      cursor: this.props.cursor
    }
    const finalStyle = this.props.isTimer ? {...currentTrackerBoxStyle, ...extendedTrackerBoxStyle} : currentTrackerBoxStyle;

    const xImagePosition = formatBackgroundPosition(this.state.titleImageLocationX);
    const yImagePosition = formatBackgroundPosition(this.state.titleImageLocationY);
    const currentTitleStyle: React.CSSProperties = {
      // Identifies the location of the title in the underlying graphic file
      backgroundPosition: xImagePosition + " " + yImagePosition,
      // Mostly centers the title image within the tracker box
      left: centerObject(this.props.boxWidth, this.state.titleWidth),
    }

    const icons = this.props.icons;

    return (
      <div id={this._name + this.props.id} style={mergeStyles(Styles.trackerBoxSquareStyle, finalStyle)}>
        {/* TODO: Hide the title in the compact views */}
        <div id="trackerTitle" style={mergeStyles(Styles.trackerTitleStyle, currentTitleStyle)}></div>

        {icons && icons.map((icon: IIconProps, index: number) => {
          // Merge missing props
          const iconProps: IIconProps = {
            ...icon,
            settings: this.props.settings,
            handleHover: this.props.handleHover,
          };
          return <Icon key={index} {...iconProps} />
        })}
        {this.props.isTimer && (
          <Timer key={"timer"} handleHover={this.props.handleHover} />
        )}
      </div>
    );
  }
}
