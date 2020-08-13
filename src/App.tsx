import React from 'react';
import * as Styles from './App.style';
import { Settings } from './components/Settings/Settings';
import { applyCookie } from './utils';
import { TrackerContainer } from './components/TrackerContainer/TrackerContainer';
import { ITrackerBoxProps, Borders, itemsTitle, IIconProps, Toggle } from './models';

class App extends React.Component {
  public componentDidMount() {
    // Get and apply the settings from the cookies
    applyCookie();
  }

  public render() {
    const testBox: Partial<ITrackerBoxProps> = {
      state: Borders.thick,
      boxPositionX: 8,
      boxPositionY: 8,
      boxWidth: 372,
      boxHeight: 312,
      titlePositionAdjustmentX: 0,
      titlePositionAdjustmentY: 0,
    };
    const testIcons: IIconProps[] = [
      {
        title: "Bridge",
        state: Toggle.off,
        width: 64,
        height: 64,
        positionX: 0,
        positionY: 0,
        offStateImageLocationX: 0,
        offStateImageLocationY: 320,
        onStateImageLocationX: 0,
        onStateImageLocationY: 256,
      }
    ]
    testBox.icons = testIcons;

    const itemsBox = {...testBox, ...itemsTitle} as ITrackerBoxProps;

    const boxes = [itemsBox];

    return (
      <div className="app" style={Styles.appContainerStyle}>
        <div className="totalCover" style={Styles.totalCoverStyle}></div>
        <TrackerContainer boxes={boxes} />
        <Settings />
      </div>
    );
  }
}

export default App;
