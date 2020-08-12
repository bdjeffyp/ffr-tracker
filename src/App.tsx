import React from 'react';
import * as Styles from './App.style';
import { Settings } from './components/Settings/Settings';
import { applyCookie } from './utils';
import { TrackerContainer } from './components/TrackerContainer/TrackerContainer';

class App extends React.Component {
  public componentDidMount() {
    // Get and apply the settings from the cookies
    applyCookie();
  }

  public render() {
    return (
      <div className="app" style={Styles.appContainerStyle}>
        <div className="totalCover" style={Styles.totalCoverStyle}></div>
        <TrackerContainer />
        <Settings />
      </div>
    );
  }
}

export default App;
