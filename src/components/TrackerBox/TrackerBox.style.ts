import * as React from "react";
import retroTitleImage from "../../images/retroTitle.png";
import titleImage from "../../images/title.png";

// Creates the background color for the tracker box, similar to the PSP FF1 windows
const modernBackground = "linear-gradient(to bottom right, blue, 50%, rgb(0,0,64))";
// Creates a solid blue background color like the NES FF1 status windows. Using linear-gradient because of the backgroundImage property.
const retroBackground = "linear-gradient(rgb(0,0,196), rgb(0,0,196))";
export const trackerBoxSquareStyle = (isModern: boolean): React.CSSProperties => {
  return {
    position: "absolute",
    borderStyle: "solid",
    borderColor: "transparent",
    // Works for thick border. Should be ok for thin as well...
    borderRadius: "20px",
    // TODO: Allow color variations.
    backgroundImage: isModern ? modernBackground : retroBackground,
    // Ensures the gradient starts in the border, rather than the padding
    backgroundOrigin: "border-box",
  };
};

export const trackerTitleStyle = (isModern: boolean): React.CSSProperties => {
  return {
    position: "absolute",
    top: "-8px",
    width: "136px",
    height: "20px",
    backgroundImage: `url(${isModern ? titleImage : retroTitleImage})`,
    backgroundRepeat: "no-repeat",
  };
};

export const timerWrapStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "85px",
  // left: "72px",
  top: "8px",
  overflow: "hidden",
  transformOrigin: "180px 48px",
};

export const timerDigitStyle: React.CSSProperties = {
  position: "absolute",
  top: "-10px",
  width: "60px",
  height: "100px",
  lineHeight: "100px",
  overflow: "hidden",
  textAlign: "center",
  textShadow: "4px 4px #000",
  transform: "translateX(-86.5px)",
};

export const digitsStyle: React.CSSProperties = {
  position: "absolute",
  width: "40px",
  left: "10px",
  top: "-5px",
  textAlign: "center",
};

export const digit0Style: React.CSSProperties = {
  left: "50px",
  opacity: "0",
};

export const digit1Style: React.CSSProperties = {
  left: "100px",
  opacity: "0",
};

export const colon1Style: React.CSSProperties = {
  left: "150px",
  opacity: "0",
};

export const digit2Style: React.CSSProperties = {
  left: "160px",
  opacity: "0",
};

export const digit3Style: React.CSSProperties = {
  left: "200px",
  opacity: "0",
};

export const colon3Style: React.CSSProperties = {
  left: "250px",
  opacity: "0",
};

export const digit4Style: React.CSSProperties = {
  left: "260px",
  opacity: "0",
};

export const digit5Style: React.CSSProperties = {
  left: "300px",
};

export const digit6Style: React.CSSProperties = {
  left: "360px",
  top: "0px",
  fontSize: "50px",
};

export const digit7Style: React.CSSProperties = {
  left: "390px",
  top: "0px",
  fontSize: "50px",
};

export const colonStyle: React.CSSProperties = {
  position: "absolute",
  left: "350px",
  top: "-10px",
  height: "96px",
  width: "20px",
  lineHeight: "96px",
  fontSize: "45px",
  fontWeight: 700,
  textAlign: "center",
  textShadow: "4px 4px #000",
  transform: "translateY(8px) translateX(-86.5px)",
};
