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
  };
};
