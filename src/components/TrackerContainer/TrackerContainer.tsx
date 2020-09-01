import * as React from "react";
import { ITrackerBoxProps, ITrackerContainerProps } from "../../models";
import { TrackerBox } from "../TrackerBox/TrackerBox";
import * as Styles from "./TrackerContainer.style";

export class TrackerContainer extends React.Component<ITrackerContainerProps> {
  public render() {
    const boxes = this.props.boxes;

    return (
      <div id="trackerContainer" style={Styles.trackerContainerStyle}>
        {boxes &&
          boxes.map((box: ITrackerBoxProps, index: number) => {
            // Merge missing props
            const boxProps: ITrackerBoxProps = {
              ...box,
              settings: this.props.settings,
              handleHover: this.props.handleHover,
            };
            return <TrackerBox key={index} {...boxProps} />;
          })}
      </div>
    );
  }
}
