import * as React from 'react';
import * as Styles from './TrackerBox.style';
import { ITrackerBoxProps, Borders, IIconProps } from '../../models';
import { mergeStyles, formatBackgroundPosition, centerObject } from '../../utils';
import thickBorderImage from '../../images/borderThick.png';
import thinBorderImage from '../../images/borderThin.png';
import { Icon } from '../Icon/Icon';
import { Timer } from './Timer';

interface IExtendedBoxProps {
  /** Border to render for this box */
  border: Borders;
}

export class TrackerBox extends React.Component<ITrackerBoxProps & IExtendedBoxProps> {
  private _name = "tracker";

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

    const xImagePosition = formatBackgroundPosition(this.props.titleImageLocationX);
    const yImagePosition = formatBackgroundPosition(this.props.titleImageLocationY);
    const currentTitleStyle: React.CSSProperties = {
      // Identifies the location of the title in the underlying graphic file
      backgroundPosition: xImagePosition + " " + yImagePosition,
      // Mostly centers the title image within the tracker box
      // TODO: Should specify the width of the title image in the props rather than the generic setting of 136px, then add half that value to get the true center.
      left: centerObject(this.props.boxWidth, this.props.titleWidth),
    }

    const icons = this.props.icons;

    return (
      <div id={this._name + this.props.id} style={mergeStyles(Styles.trackerBoxSquareStyle, finalStyle)}>
        <div id="trackerTitle" style={mergeStyles(Styles.trackerTitleStyle, currentTitleStyle)}></div>

        {icons && icons.map((icon: IIconProps, index: number) => <Icon key={index} {...icon} />)}
        {this.props.isTimer && <Timer key={"timer"} />}
      </div>
    );
  }
}
