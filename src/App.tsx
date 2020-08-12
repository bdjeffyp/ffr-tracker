import React from 'react';
import * as Styles from './App.style';
import { Settings } from './components/Settings/Settings';
import { applyCookie } from './utils';
import { TrackerContainer } from './components/TrackerContainer/TrackerContainer';
import { ITrackerBoxProps, Borders, itemsTitle } from './models';

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
