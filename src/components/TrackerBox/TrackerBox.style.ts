import * as React from 'react';
import titleImage from '../../images/title.png';

export const trackerBoxSquareStyle: React.CSSProperties = {
  position: "absolute",
  borderStyle: "solid",
  borderColor: "transparent",
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
