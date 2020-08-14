import React from 'react';
import * as Styles from './App.style';
import { Settings } from './components/Settings/Settings';
import { applyCookie } from './utils';
import { TrackerContainer } from './components/TrackerContainer/TrackerContainer';
import { ffrTracker } from './trackerProperties';

class App extends React.Component {
  public componentDidMount() {
    // Get and apply the settings from the cookies
    applyCookie();
  }

  public render() {
    return (
      <div className="app" style={Styles.appContainerStyle} onContextMenu={this._captureRightClick}>
        <div className="totalCover" style={Styles.totalCoverStyle}></div>
        <TrackerContainer {...ffrTracker} />
        <Settings />
      </div>
    );
  }

  /** Prevent context menu popups within our app */
  private _captureRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
  }
}

export default App;
