import * as React from 'react';
import * as Styles from './TrackerContainer.style';
import { TrackerBox } from '../TrackerBox/TrackerBox';
import { ITrackerBoxProps, ITrackerContainerProps, Borders } from '../../models';

export class TrackerContainer extends React.Component<ITrackerContainerProps> {
  public render() {
    const boxes = this.props.boxes;

    return (
      <div id="trackerContainer" style={Styles.trackerContainerStyle}>
        {boxes && boxes.map((box: ITrackerBoxProps, index: number) => <TrackerBox key={index} border={this.props.bordersState} {...box} />)}
      </div>
    );
  }
}
