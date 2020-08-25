import * as React from 'react';
import * as Styles from './TrackerContainer.style';
import { TrackerBox } from '../TrackerBox/TrackerBox';
import { ITrackerBoxProps, ITrackerContainerProps } from '../../models';

export class TrackerContainer extends React.Component<ITrackerContainerProps> {
  public render() {
    const boxes = this.props.boxes;

    return (
      <div id="trackerContainer" style={Styles.trackerContainerStyle}>
        {boxes && boxes.map((box: ITrackerBoxProps, index: number) => {
          const boxProps: ITrackerBoxProps = { ...box, handleHover: this.props.handleHover };
          return <TrackerBox key={index} border={this.props.bordersState} {...boxProps} />;
        })}
      </div>
    );
  }
}
