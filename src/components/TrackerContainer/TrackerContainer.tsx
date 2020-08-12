import * as React from 'react';
import * as Styles from './TrackerContainer.style';
import { TrackerBox } from '../TrackerBox/TrackerBox';
import { ITrackerBoxProps, Borders } from '../../models';

export class TrackerContainer extends React.Component {
  public render() {
    const testBox: ITrackerBoxProps = {
      state: Borders.thick,
      boxPositionX: 8,
      boxPositionY: 8,
      boxWidth: 372,
      boxHeight: 312,
      titleImagePositionX: 0,
      titleImagePositionY: 0,
      titlePositionAdjustmentX: 0,
      titlePositionAdjustmentY: 0,
    };

    return (
      <div id="trackerContainer" style={Styles.trackerContainerStyle}>
        <TrackerBox {...testBox} />
      </div>
    );
  }
}
