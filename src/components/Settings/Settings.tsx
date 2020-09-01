import { Back, Elastic, gsap, Power4 } from "gsap";
import * as React from "react";
import {
  Borders,
  Goals,
  ISettingsGroup,
  ISettingsItem,
  ISettingsMenuProps,
  ISettingsProps,
  Layouts,
  SettingsNames,
  Toggle,
} from "../../models";
import { settingsMenu } from "../../properties/settingProperties";
import { getSavedSettings, mergeStyles } from "../../utils";
import * as Styles from "./Settings.style";

export interface ISettingsState {
  panelOpen: boolean;
  currentGoal: Goals;
  currentFreeOrbs: Toggle;
  currentLayout: Layouts;
  currentBorder: Borders;
  currentShowTimer: Toggle;
  currentShowCrystals: Toggle;
  currentEra: Toggle;
  caption: string;
}

export class Settings extends React.Component<ISettingsMenuProps, ISettingsState> {
  private _name = "settingsTab";
  private _settings: ISettingsGroup[] = [];

  constructor(props: any) {
    super(props);

    // Get the settings from the cookies if they exist
    const newState = this._convertSettings(getSavedSettings());
    this.state = newState;
  }

  public componentDidMount() {
    this.setState(this._convertSettings(getSavedSettings()));
    this._settings = settingsMenu(this.state);
  }

  public render() {
    // Caption strings for the settings menu toggle and popout buttons
    const toggleMenuCaption = "Toggle Settings Menu";
    const popoutMenuCaption = "Open tracker in new window";

    // Get the caption from the hovered object in the tracker boxes.
    let caption = this.props.caption;
    // However, if a setting is hovered, the state will have a value so show that instead.
    if (this.state.caption !== "") {
      caption = this.state.caption;
    }

    return (
      <div id={this._name} style={Styles.settingsTabStyle}>
        {/* Icons for opening menu and popping out tracker */}
        <div
          style={Styles.tabIconStyle}
          title={toggleMenuCaption}
          onClick={this._toggle}
          onMouseEnter={() => this._handleHover(toggleMenuCaption)}
          onMouseLeave={() => this._handleHover("")}
        >
          &#9776;
        </div>
        <div
          style={mergeStyles(Styles.tabIconStyle, Styles.popOutTabIconStyle)}
          title={popoutMenuCaption}
          onClick={this._popOut}
          onMouseEnter={() => this._handleHover(popoutMenuCaption)}
          onMouseLeave={() => this._handleHover("")}
        >
          &#8663;
        </div>
        {/* Caption */}
        <div style={Styles.captionStyle}>{caption}</div>

        {/* Render settings options based on the imported properties */}
        {this._settings &&
          this._settings.map((group: ISettingsGroup, index: number) => {
            const positionStyle: React.CSSProperties = {
              left: group.xPosition,
              top: group.yPosition,
            };
            return (
              <div key={index} style={mergeStyles(Styles.settingGroupStyle, positionStyle)}>
                <b>&nbsp;{group.title}</b>
                <br />
                {group.settings.map((item: ISettingsItem, index: number) => (
                  <div key={index} onMouseEnter={() => this._handleHover(item.caption)} onMouseLeave={() => this._handleHover("")}>
                    <input
                      id={item.name}
                      name={item.group}
                      title={item.caption}
                      type={item.isRadio ? "radio" : "checkbox"}
                      value={item.value}
                      checked={item.currentValue === item.value}
                      disabled={item.disabled}
                      onChange={this._apply}
                    />
                    <label htmlFor={item.name}> {item.name}</label>
                  </div>
                ))}
              </div>
            );
          })}
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
        newState.currentFreeOrbs = newState.currentFreeOrbs === Toggle.on ? Toggle.off : Toggle.on;
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
      case SettingsNames.crystalOrOrb:
        newState.currentShowCrystals = event.target.value as Toggle;
        break;
      case SettingsNames.iconSet:
        newState.currentEra = event.target.value as Toggle;
    }
    this.setState(newState);

    // Update the menu appearance
    this._settings = settingsMenu(newState);

    // Update the cookie
    const newSettings: ISettingsProps = {
      goal: newState.currentGoal,
      freeOrbs: newState.currentFreeOrbs,
      layout: newState.currentLayout,
      border: newState.currentBorder,
      showTimer: newState.currentShowTimer,
      showCrystals: newState.currentShowCrystals,
      era: newState.currentEra,
    };
    document.cookie = "settings=" + JSON.stringify(newSettings) + "; expires=Sat, 26 Dec 2025 12:00:00 UTC; path=/";

    // Pass up the settings to the App wrapper
    this.props.handleChange(newSettings);
  };

  private _convertSettings = (props: ISettingsProps): ISettingsState => {
    // Convert
    return {
      panelOpen: false,
      currentGoal: props.goal,
      currentFreeOrbs: props.freeOrbs,
      currentLayout: props.layout,
      currentBorder: props.border,
      currentShowTimer: props.showTimer,
      currentShowCrystals: props.showCrystals,
      currentEra: props.era,
      caption: "",
    };
  };

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
  };

  private _popOut = () => {
    // TODO: Programmatically determine the width and height of the new window. The code below is making use of JQuery, which we are not using.
    // console.log($("#totalCover").width());
    // const width = $("#totalCover").width() + 40 + ((settings.mapAlign == 1) ? ($("#totalCover").height() / 2) : 0);
    // const height = $("#totalCover").height() + 40 + ((settings.mapAlign == 2) ? ($("#totalCover").width() / 2) : 0);
    // console.log(width + " " + height)
    window.open("index.html", "", "titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0");
  };

  private _handleHover = (caption: string) => {
    this.setState({ caption: caption });
  };
}
