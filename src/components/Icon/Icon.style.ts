import * as React from "react";
import gridImage from "../../images/grid.png";
import retroGridImage from "../../images/retroGrid.png";

export const iconStyle = (isModern: boolean): React.CSSProperties => {
  return {
    position: "absolute",
    left: "0px",
    top: "0px",
    backgroundImage: `url(${isModern ? gridImage : retroGridImage})`,
    cursor: "pointer",
    margin: "8px",
    textAlign: "center",
  };
};

export const iconNameStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  textShadow: "rgb(0,0,0) 2px 2px",
  fontSize: "small",
  top: "95%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
