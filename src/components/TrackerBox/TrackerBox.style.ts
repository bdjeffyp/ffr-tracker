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
  left: "12px",
  top: "-16px",
  width: "136px",
  height: "20px",
  backgroundImage: `url(${titleImage})`,
  backgroundRepeat: "no-repeat",
};
