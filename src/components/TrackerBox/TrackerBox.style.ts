import * as React from 'react';
import titleImage from '../../images/title.png';

export const trackerBoxSquareStyle: React.CSSProperties = {
  position: "absolute",
  borderStyle: "solid",
  borderColor: "transparent",
  // Works for thick border. Should be ok for thin as well...
  borderRadius: "20px",
  // Creates the background color for the tracker box, similar to the PSP FF1 windows
  // TODO: Allow color variations.
  backgroundImage: "linear-gradient(to bottom right, blue, 50%, rgb(0,0,64))",
  // Ensures the gradient starts in the border, rather than the padding
  backgroundOrigin: "border-box",
};

export const trackerTitleStyle: React.CSSProperties = {
  position: "absolute",
  top: "-8px",
  width: "136px",
  height: "20px",
  backgroundImage: `url(${titleImage})`,
  backgroundRepeat: "no-repeat",
};

export const timerWrapStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "85px",
  // left: "72px",
  top: "8px",
  overflow: "hidden",
  transformOrigin: "180px 48px",
}

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
}

export const digitsStyle: React.CSSProperties = {
  position: "absolute",
  width: "40px",
  left: "10px",
  top: "-5px",
  textAlign: "center",
}

export const digit0Style: React.CSSProperties = {
  left: "50px",
  opacity: "0",
}

export const digit1Style: React.CSSProperties = {
  left: "100px",
  opacity: "0",
}

export const colon1Style: React.CSSProperties = {
  left: "150px",
  opacity: "0",
}

export const digit2Style: React.CSSProperties = {
  left: "160px",
  opacity: "0",
}

export const digit3Style: React.CSSProperties = {
  left: "200px",
  opacity: "0",
}

export const colon3Style: React.CSSProperties = {
  left: "250px",
  opacity: "0",
}

export const digit4Style: React.CSSProperties = {
  left: "260px",
  opacity: "0",
}

export const digit5Style: React.CSSProperties = {
  left: "300px",
}

export const digit6Style: React.CSSProperties = {
  left: "360px",
  top: "0px",
  fontSize: "50px",
}

export const digit7Style: React.CSSProperties = {
  left: "390px",
  top: "0px",
  fontSize: "50px",
}

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
}
