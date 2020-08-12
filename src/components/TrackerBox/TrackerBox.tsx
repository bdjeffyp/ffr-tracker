import * as React from 'react';
import * as Styles from './TrackerBox.style';
import { ITrackerBoxProps, Borders } from '../../models';
import { mergeStyles } from '../../utils';
import thickBorderImage from '../../images/borderThick.png';
import thinBorderImage from '../../images/borderThin.png';

export class TrackerBox extends React.Component<ITrackerBoxProps> {
  private _name = "tracker";

  public render() {
    // Build the extended style information from the props
    let borderImage = "";
    let borderWidth = "";
    switch (this.props.state) {
      case Borders.thick:
        borderImage = `url(${thickBorderImage}) 28 round`;
        borderWidth = "28px";
        break;
      case Borders.thin:
        borderImage = `url(${thinBorderImage}) 20 round`;
        borderWidth = "20px"
        break;
      default:
        borderImage = "none";
        borderWidth = "1px";
        break;
    }
    const currentTrackerBoxStyle: React.CSSProperties = {
      left: this.props.boxPositionX,
      top: this.props.boxPositionY,
      width: this.props.boxWidth,
      height: this.props.boxHeight,
      borderImage: borderImage,
      borderWidth: borderWidth,
    };

    const xImagePosition = this.props.titleImageLocationX === 0 ? "0px" : "-" + this.props.titleImageLocationX + "px";
    const yImagePosition = this.props.titleImageLocationY === 0 ? "0px" : "-" + this.props.titleImageLocationY + "px";
    const currentTitleStyle: React.CSSProperties = {
      backgroundPosition: xImagePosition + " " + yImagePosition,
    }

    return (
      <div id={this._name + this.props.id} style={mergeStyles(Styles.trackerBoxSquareStyle, currentTrackerBoxStyle)}>
        <div id="trackerTitle" style={mergeStyles(Styles.trackerTitleStyle, currentTitleStyle)}></div>
      </div>
    );
  }
}
