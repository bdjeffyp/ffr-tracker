import React from 'react';
import * as Styles from './App.style';
import { Settings } from './components/Settings/Settings';
import { TrackerContainer } from './components/TrackerContainer/TrackerContainer';
import { ffrTracker } from './properties/trackerProperties';
import { ITrackerContainerProps, ISettingsProps } from './models';

interface IAppState {
  settingCaption: string;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      settingCaption: "",
    };
  }

  public render() {
    const trackerProps: ITrackerContainerProps = { ...ffrTracker, handleHover: this._handleHoverChange };
    return (
      <div className="app" style={Styles.appContainerStyle} onContextMenu={this._captureRightClick}>
        <div className="totalCover" style={Styles.totalCoverStyle}></div>
        <TrackerContainer {...trackerProps} />
        <Settings caption={this.state.settingCaption} />
      </div>
    );
  }

  private _handleHoverChange = (caption: string) => {
    this.setState({ settingCaption: caption });
  }

  /** Prevent context menu popups within our app */
  private _captureRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
  }
}

export default App;
