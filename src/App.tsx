import React from 'react';
import * as Styles from './App.style';
import { Settings } from './components/Settings/Settings';
import { TrackerContainer } from './components/TrackerContainer/TrackerContainer';
import { ffrTracker } from './properties/trackerProperties';
import { ITrackerContainerProps, ISettingsProps, Goals, Toggle, Layouts, Borders, IconNameType } from './models';
import { getSavedSettings } from './utils';
import { OriginalItemNames, ModernItemNames } from './strings';

interface IAppState {
  settingCaption: string;
  currentSettings: ISettingsProps;
}
const defaultSettings: ISettingsProps = {
  goal: Goals.regular,
  freeOrbs: Toggle.off,
  layout: Layouts.square,
  border: Borders.thick,
  showTimer: Toggle.on,
  showCrystals: Toggle.off,
};

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      settingCaption: "",
      currentSettings: defaultSettings,
    };
  }

  public componentDidMount() {
    // Ensure the default settings are updated with saved settings, if available
    const savedSettings = getSavedSettings()
    this._handleSettingsChange(savedSettings);
  }

  public render() {
    const nameType = this.state.currentSettings.showCrystals === Toggle.on ? IconNameType.modern : IconNameType.original;
    const names = nameType === IconNameType.original ? OriginalItemNames : ModernItemNames;
    // Build tracker props based on settings
    const trackerProps: ITrackerContainerProps = {
      nameType: nameType,
      bordersState: this.state.currentSettings.border,
      settings: this.state.currentSettings,
      handleHover: this._handleHoverChange,
      boxes: ffrTracker(names, this.state.currentSettings.goal, this.state.currentSettings.showTimer === Toggle.on).boxes!,
    };
    return (
      <div className="app" style={Styles.appContainerStyle} onContextMenu={this._captureRightClick}>
        <div className="totalCover" style={Styles.totalCoverStyle}></div>
        <TrackerContainer {...trackerProps} />
        <Settings caption={this.state.settingCaption} handleChange={this._handleSettingsChange} />
      </div>
    );
  }

  // private _updateBoxes = (settings: ISettingsProps) => {
  //   const boxProps: IBoxesProps = {
  //     goal: settings.goal,
  //     names: settings.showCrystals === Toggle.on ? IconNameType.modern : IconNameType.original
  //   };
  //   this._trackerBoxes = new FfrTracker(boxProps);
  // }

  private _handleHoverChange = (caption: string) => {
    this.setState({ settingCaption: caption });
  }

  private _handleSettingsChange = (settings: ISettingsProps) => {
    this.setState({ currentSettings: settings });
    // this._updateBoxes(settings);
  }

  /** Prevent context menu popups within our app */
  private _captureRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
  }
}

export default App;
