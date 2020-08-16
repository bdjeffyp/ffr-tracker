import * as React from 'react';
import { gsap, Elastic, Power4, Back } from 'gsap';
import { Goals, Layouts, Borders, Toggle, SettingsNames, ISettingsProps } from '../../models';
import * as Styles from './Settings.style';
import { mergeStyles } from '../../utils';

interface ISettingsState {
  panelOpen: boolean,
  currentGoal: Goals,
  currentFreeOrbs: Toggle,
  currentLayout: Layouts,
  currentBorder: Borders,
  currentShowTimer: Toggle,
  currentShowCrystals: Toggle,
}

export class Settings extends React.Component<ISettingsProps, ISettingsState> {
  private _name = "settingsTab";

  constructor(props: any) {
    super(props);
    this.state = {
      panelOpen: false,
      currentGoal: this.props.goal,
      currentFreeOrbs: this.props.freeOrbs,
      currentLayout: this.props.layout,
      currentBorder: this.props.border,
      currentShowTimer: this.props.showTimer,
      currentShowCrystals: this.props.showCrystals,
    };
  }

  public componentDidMount() {
    // Establish the checked buttons in the settings menu based on the passed in settings
    // this._apply({} as React.ChangeEvent<HTMLInputElement>);
  }

  public render() {
    return (
      <div id={this._name} style={Styles.settingsTabStyle}>
        <div id="tabIcon" style={Styles.tabIconStyle} title="Toggle Settings Menu" onClick={this._toggle}>&#9776;</div>
        <div id="tabIcon" style={mergeStyles(Styles.tabIconStyle, Styles.popOutTabIconStyle)} title="Open tracker in new window" onClick={this._popOut}>&#8663;</div>
        <div id="caption" style={Styles.captionStyle}></div>

        <div className="selection" style={mergeStyles(Styles.settingGroupStyle, Styles.goalGroupStyle)}>
          <b>&nbsp;GOAL</b>
          <br/>
          <input title="No Variation (Light crystals, get key/lute)" className="radio regMode" type="radio" name={SettingsNames.goal}
            value={Goals.regular} checked={this.state.currentGoal === Goals.regular} onChange={this._apply} />
          <span className="radio regMode"> Regular</span>
          <br/>
          <input title="Shard Hunt (Find a required number of crystal shards)" className="radio shardHunt" type="radio" name={SettingsNames.goal}
            value={Goals.shardHunt} checked={this.state.currentGoal === Goals.shardHunt} onChange={this._apply} />
          <span className="radio shardHunt"> Shard Hunt</span>
          <br/>
          <input title="Chaos Rush (Have lute, key not required in ToFR)" className="radio chaosRush" type="radio" name={SettingsNames.goal}
            value={Goals.chaosRush} checked={this.state.currentGoal === Goals.chaosRush} onChange={this._apply} />
          <span className="radio chaosRush"> Chaos Rush</span>
          <br />
          <input title="Free ORBs (Have all crystals/ORBs lit at the start)" className="checkbox freeOrbs" type="checkbox" name={SettingsNames.freeOrbs}
            value={Toggle.on} checked={this.state.currentFreeOrbs === Toggle.on} onChange={this._apply} />
          <span className="checkbox freeOrbs"> Free ORBs</span>
        </div>

        <div className="selection" style={mergeStyles(Styles.settingGroupStyle, Styles.layoutGroupStyle)}>
          <b>&nbsp;LAYOUT</b>
          <br />
          <input title="A Square-ish Layout" className="radio Square" type="radio" name={SettingsNames.layout} value={Layouts.square} onChange={this._apply} />
          <span className="radio Square"> Square</span>
          <br/>
          -- More soon
          {/* <br/>
          <input title="Dungeon Icons Arranged by Location" className="radio Geo" type="radio" name="layout" value="1" onChange={this._apply} />
          <span className="radio Geo"> Geographic</span>
          <br/>
          <input title="A Tall, Narrow Layout" className="radio Tall" type="radio" name="layout" value="2" onChange={this._apply} />
          <span className="radio Tall"> Tall</span>
          <br/>
          <input title="A Short, Wide Layout" className="radio Wide" type="radio" name="layout" value="3" onChange={this._apply} />
          <span className="radio Wide"> Wide</span>
          <br/>
          <input title="A condensed layout" className="radio AIO" type="radio" name="layout" value="4" onChange={this._apply} />
          <span className="radio AIO"> All-in-One</span> */}
        </div>

        <div className="selection" style={mergeStyles(Styles.settingGroupStyle, Styles.bordersGroupStyle)}>
          <b>&nbsp;BORDERS</b>
          <br/>
          <input title="No Border (most compact)" className="radio noBorder" type="radio" name={SettingsNames.border} value={Borders.off} onChange={this._apply} />
          <span className="radio noBorder"> Off</span>
          <br/>
          <input title="Thin Border" className="radio thinBorder" type="radio" name={SettingsNames.border} value={Borders.thin} onChange={this._apply} />
          <span className="radio thinBorder"> Thin</span>
          <br/>
          <input title="Thick Border" className="radio thickBorder" type="radio" name={SettingsNames.border} value={Borders.thick} onChange={this._apply} />
          <span className="radio thickBorder"> Thick</span>
          <br/>
        </div>

        <div className="selection" style={mergeStyles(Styles.settingGroupStyle, Styles.timerGroupStyle)}>
          <b>&nbsp;TIMER</b>
            <br/>
            <input title="No Timer" className="radio timerOff" type="radio" name={SettingsNames.timerMode} value={Toggle.off} onChange={this._apply} />
            <span className="radio timerOff"> Off</span>
            <br/>
            <input title="Timer On (click to start/pause, right-click to reset)" className="radio timerOn" type="radio" name={SettingsNames.timerMode} value={Toggle.on} onChange={this._apply} />
            <span className="radio timerOn"> On</span>
            <br/>
        </div>

        <div className="selection" style={mergeStyles(Styles.settingGroupStyle, Styles.stateGroupStyle)}>
          <b>&nbsp;STATE</b>
          <br/>
          -- Coming soon
          {/* <input title="Standard Mode" className="radio icon0" type="radio" name="openMode" value="0" onChange={this._apply} checked />
          <span className="radio icon0"> Standard</span>
          <br/>
          <input title="Open Mode" className="radio icon1" type="radio" name="openMode" value="1" onChange={this._apply} />
          <span className="radio icon1"> Open</span> */}
        </div>

        <div className="selection" style={mergeStyles(Styles.settingGroupStyle, Styles.iconsGroupStyle)}>
          <b>&nbsp;ICONS</b>
          <br/>
          <input title="Use Crystal Icons" className="radio icon0" type="radio" name={SettingsNames.iconSet} value={Toggle.off} onChange={this._apply} />
          <span className="radio icon0"> Crystals</span>
          <br/>
          <input title="Use ORB Icons" className="radio icon1" type="radio" name={SettingsNames.iconSet} value={Toggle.on} onChange={this._apply} />
          <span className="radio icon1"> ORBs</span>
        </div>

        {/* <div className="selection" style="top:170px; left:290px">
          <b>&nbsp;DUNGEONS</b>
          <br/>
          <input title="Boss Head Icons (click ? to change prize, click head to mark complete)" className="radio dungeonDispHeads" type="radio" name="dungeonDisp" value="0" onChange={this._apply} checked />
          <span className="radio dungeonDispHeads"> Boss Heads</span>
          <br/>
          <input title="Prize Icons (click ? to change prize, click initials to mark complete)" className="radio dungeonDispPrizes" type="radio" name="dungeonDisp" value="1" onChange={this._apply} />
          <span className="radio dungeonDispPrizes"> Prizes</span>
        </div> */}

        <div className="selection" style={mergeStyles(Styles.settingGroupStyle, Styles.mapsGroupStyle)}>
          <b>&nbsp;MAPS</b>
          <br/>
          -- Coming soon
          {/* <input title="No Map" className="radio mapOff" type="radio" name="mapAlign" value="0" onChange={this._apply} checked />
          <span className="radio mapOff"> Off</span>
          <br/>
          <input title="Vertical Maps" className="radio mapV" type="radio" name="mapAlign" value="1" onChange={this._apply} />
          <span className="radio mapV"> Vertical</span>
          <br/>
          <input title="Horizontal Maps" className="radio mapH" type="radio" name="mapAlign" value="2" onChange={this._apply} />
          <span className="radio mapH"> Horizontal</span> */}
        </div>
      </div>
    );
  }

  /**
   * Reflect the updated settings in the tracker layout
   */
  private _apply = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState: ISettingsState = this.state;

    // Update the state for the applicable setting group
    switch (event.target.name) {
      case SettingsNames.goal:
        newState.currentGoal = event.target.value as Goals;
        break;
      case SettingsNames.freeOrbs:
        newState.currentFreeOrbs = event.target.value as Toggle;
        break;
      case SettingsNames.layout:
        newState.currentLayout = event.target.value as Layouts;
        break;
      case SettingsNames.border:
        newState.currentBorder = event.target.value as Borders;
        break;
      case SettingsNames.timerMode:
        newState.currentShowTimer = event.target.value as Toggle;
        break;
      case SettingsNames.iconSet:
        newState.currentShowCrystals = event.target.value as Toggle;
        break;
    }
    this.setState(newState);

    // Convert to the props format and update the cookie
    document.cookie = "settings=" + JSON.stringify(newState) + "; expires=Sat, 26 Dec 2025 12:00:00 UTC; path=/";

    // TODO: Apply the settings to the tracker boxes
  }

  private _toggle = () => {
    // Flip the bit
    const isOpen = !this.state.panelOpen;
    this.setState({ panelOpen: isOpen });

    // Animate the window
    if (isOpen) {
      gsap.to("#" + this._name, 0.5, { bottom: -270, ease: Elastic.easeOut });
      gsap.to("#" + this._name, 0.5, { backgroundColor: "#111", ease: Power4.easeOut });
    } else {
      gsap.to("#" + this._name, 0.3, { bottom: -495, ease: Back.easeIn });
      gsap.to("#" + this._name, 0.5, { backgroundColor: "rgba(17,17,17,0)", ease: Power4.easeOut });
    }
  }

  private _popOut = () => {
    // console.log($("#totalCover").width());
  
    // const width = $("#totalCover").width() + 40 + ((settings.mapAlign == 1) ? ($("#totalCover").height() / 2) : 0);
    // const height = $("#totalCover").height() + 40 + ((settings.mapAlign == 2) ? ($("#totalCover").width() / 2) : 0);
  
    // console.log(width + " " + height)
    // open('index.html',
    //   '',
    //   'width=' + width + ',height=' + height + ',titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0'
    // );
  }
}
