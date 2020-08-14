import * as React from 'react';
import * as Styles from './TrackerBox.style';
import { mergeStyles } from '../../utils';
import moment from 'moment';
import gsap, { Linear, Back } from 'gsap';
import { TimerDigits } from '../../models';

interface ITimerState {
  isRunning: boolean;
}

export class Timer extends React.Component<{}, ITimerState> {
  private _timerUpdate: NodeJS.Timeout | undefined;
  private _startTime: moment.Moment;
  private _duration: moment.Duration;
  private _displayTime: moment.Duration;
  private _previousBlankCount = 0;
  private _digits = [0, 0, 0, 0, 0, 0, 0, 0];

  constructor(props: any) {
    super(props);

    // Simple initialization
    this._startTime = moment();
    this._duration = moment.duration(0);
    this._displayTime = moment.duration(0);
    this.state = {
      isRunning: false,
    };
  }

  public componentDidMount() {
    this._resetTimer();
  }

  public render() {
    return (
      <div key="timerWrap" id="timerWrap" style={Styles.timerWrapStyle} onClick={this._toggleTimer} onContextMenu={this._resetTimer}>
        {this._digits.map((_: number, index: number) => {
          let style: React.CSSProperties = {};
          let colonStyle: React.CSSProperties = {};
          let colon = ":";
          switch (index) {
            case 0:
              style = mergeStyles(Styles.timerDigitStyle, Styles.digit0Style);
              break;
            case 1:
              style = mergeStyles(Styles.timerDigitStyle, Styles.digit1Style);
              colonStyle = mergeStyles(Styles.colonStyle, Styles.colon1Style);
              break;
            case 2:
              style = mergeStyles(Styles.timerDigitStyle, Styles.digit2Style);
              break;
            case 3:
              style = mergeStyles(Styles.timerDigitStyle, Styles.digit3Style);
              colonStyle = mergeStyles(Styles.colonStyle, Styles.colon3Style);
              break;
            case 4:
              style = mergeStyles(Styles.timerDigitStyle, Styles.digit4Style);
              break;
            case 5:
              style = mergeStyles(Styles.timerDigitStyle, Styles.digit5Style);
              colonStyle = Styles.colonStyle;
              colon = ".";
              break;
            case 6:
              style = mergeStyles(Styles.timerDigitStyle, Styles.digit6Style);
              break;
            case 7:
              style = mergeStyles(Styles.timerDigitStyle, Styles.digit7Style);
              break;
          }
          const digit = (
            <div key={"digit" + index} className="timerDigit" id={"digit" + index} style={style}>
              <span key={"digits" + index} className="digits" style={Styles.digitsStyle}>
                0
                <br />1
                <br />2
                <br />3
                <br />4
                <br />5
                <br />6
                <br />7
                <br />8
                <br />9
                <br />0
              </span>
            </div>
          );

          return (
            <>
              {digit}
              {(index === 1 || index === 3 || index === 5) &&
                <div key={"colon" + index} className="colon" id={"colon" + index} style={colonStyle}>{colon}</div>
              }
            </>
          )
        })}
      </div>
    );
  }

  private _toggleTimer = () => {
    // Toggle the state
    const newState = !this.state.isRunning;
    this.setState({ isRunning: newState });
    // Start or pause the timer as appropriate
    if (newState) {
      this._startTimer();
    } else {
      this._pauseTimer();
    }
  }

  private _resetTimer = () => {
    const speed = 0.5;
    // Stop the timer
    this._pauseTimer();
    // Reset the duration
    this._duration = moment.duration(0);
    // Update the state
    this.setState({ isRunning: false });
    // Reset the digits store
    this._digits = [0, 0, 0, 0, 0, 0, 0, 0];
    // Reset the animation
    gsap.to(".digits", speed, {
      y: 0,
      ease: Back.easeInOut.config(1.4)
    });
    // Restore the digit positions
    this._fadeDigits();
  }

  private _startTimer = () => {
    this._startTime = moment();
    this._timerUpdate = setInterval(() => this._checkTime(), 10);
  }

  private _pauseTimer = () => {
    this._duration = this._displayTime;
    if (typeof this._timerUpdate !== "undefined") {
      clearInterval(this._timerUpdate);
    }
  }

  private _checkTime = () => {
    // Update the time in the display
    this._displayTime = this._duration.clone().add(moment().diff(this._startTime));

    // Set the values
    const milliseconds = this._displayTime.milliseconds();
    const seconds = this._displayTime.seconds();
    const minutes = this._displayTime.minutes();
    const hours = this._displayTime.hours();

    // Animate the time in the display
    if (milliseconds >= 100) {
      this._scrollDigit(TimerDigits.tensMilliseconds, +milliseconds.toString()[0]);
      this._scrollDigit(TimerDigits.onesMilliseconds, +milliseconds.toString()[1]);
    } else if (milliseconds >= 10) {
      this._scrollDigit(TimerDigits.tensMilliseconds, 0);
      this._scrollDigit(TimerDigits.onesMilliseconds, +milliseconds.toString()[0]);
    } else {
      this._scrollDigit(TimerDigits.tensMilliseconds, 0);
      this._scrollDigit(TimerDigits.onesMilliseconds, 0);
    }
    if (seconds >= 10) {
      this._scrollDigit(TimerDigits.tensSeconds, +seconds.toString()[0]);
      this._scrollDigit(TimerDigits.onesSeconds, +seconds.toString()[1]);
    } else {
      this._scrollDigit(TimerDigits.tensSeconds, 0);
      this._scrollDigit(TimerDigits.onesSeconds, seconds);
    }
    if (minutes >= 10) {
      this._scrollDigit(TimerDigits.tensMinutes, +minutes.toString()[0]);
      this._scrollDigit(TimerDigits.onesMinutes, +minutes.toString()[1]);
    } else {
      this._scrollDigit(TimerDigits.tensMinutes, 0);
      this._scrollDigit(TimerDigits.onesMinutes, minutes);
    }
    if (hours >= 10) {
      this._scrollDigit(TimerDigits.tensHours, +hours.toString()[0]);
      this._scrollDigit(TimerDigits.onesHours, +hours.toString()[1]);
    } else {
      this._scrollDigit(TimerDigits.tensHours, 0);
      this._scrollDigit(TimerDigits.onesHours, hours);
    }

    this._fadeDigits();
  }

  private _scrollDigit = (digit: number, value: number) => {
    // Create the selector for animating the digit
    const selector = "#digit" + digit + " .digits";
    // The speed and ease of the animation is based on if this is a millisecond or other digit
    const isMillisecond = digit === TimerDigits.tensMilliseconds || digit === TimerDigits.onesMilliseconds;
    const speed: number = isMillisecond ? 0.05 : 0.5;
    const ease = isMillisecond ? Linear.easeNone : Back.easeInOut.config(1.4);

    // Animate if not already animating and the requested digit is not displaying the correct number
    if (this._digits[digit] !== value && !gsap.isTweening(selector)) {
      // Animation for looping back to zero
      // TODO: BUG! The tens digit for seconds shows "6" briefly and then turns into "0". Fix me!!
      if (value === 0) {
        const position = (digit === TimerDigits.tensMinutes || digit === TimerDigits.tensSeconds) ? -600 : -1000;
        gsap.to(selector, speed, {
          y: position,
          ease: ease,
          onComplete: () => gsap.set(selector, { y: 0 }),
        })
      } else {
        gsap.to(selector, speed, {
          y: (-100 * value),
          ease: ease,
        });
      }
    }

    // Update the digit in the store to the new number
    this._digits[digit] = value;
  }

  private _fadeDigits = () => {
    let blank = true;
    let blankCount = 0;
    let xOffset = 0;
    const speed = 0.5;

    for (let i = TimerDigits.tensHours; i <= TimerDigits.tensSeconds; i++) {
      if (this._digits[i] !== 0) {
        blank = false;
      }
      gsap.to("#digit" + i, speed, { opacity: blank ? 0 : 1 });
      if (i === 1 || i === 3 || i === 5) {
        gsap.to("#colon" + i, speed, { opacity: blank ? 0 : 1 });
      }
      if (blank) {
        blankCount++;
      }
    }

    // As more numbers appear, shift the timerWrap to keep the numbers centered
    if (this._previousBlankCount !== blankCount) {
      // TODO: Looks like it is adjusted properly but need to test still!!
      xOffset = blankCount === 5 ? -86.5 :
        blankCount === 4 ? -66.5 :
          blankCount === 3 ? -35.5 :
            blankCount === 2 ? -16.5 :
              blankCount === 1 ? 14 :
              0;
      if (!gsap.isTweening("#timerWrap")) {
        gsap.to("#timerWrap .timerDigit,.colon", speed, {
          x: xOffset,
          ease: Back.easeOut.config(3)
        });
      }
    }
    this._previousBlankCount = blankCount;
  }
}
