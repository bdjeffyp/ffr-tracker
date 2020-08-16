import React from 'react';
import * as Styles from './App.style';
import { Settings } from './components/Settings/Settings';
import { getSavedSettings } from './utils';
import { TrackerContainer } from './components/TrackerContainer/TrackerContainer';
import { ffrTracker } from './trackerProperties';
import { ISettingsProps } from './models';

class App extends React.Component {
  private _settings = {} as ISettingsProps;

  public componentDidMount() {
    // Get and apply the settings from the cookies
    this._settings = getSavedSettings();
  }

  public render() {
    return (
      <div className="app" style={Styles.appContainerStyle} onContextMenu={this._captureRightClick}>
        <div className="totalCover" style={Styles.totalCoverStyle}></div>
        <TrackerContainer {...ffrTracker} />
        <Settings {...this._settings} />
      </div>
    );
  }

  /** Prevent context menu popups within our app */
  private _captureRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
  }
}

export default App;
