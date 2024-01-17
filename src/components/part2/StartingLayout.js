import React from "react";
import CustomRecapLayout from "./CustomRecapLayout";
import MiddleLayout from "./MiddleLayout";

function StartingLayout() {
  const style = {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateRows: "1fr 2fr 1fr",
  };

  return (
    <div style={style}>
      <div style={{ backgroundColor: "grey" }}>
        <CustomRecapLayout />
      </div>
      <div style={{ backgroundColor: "yellow" }}>
        <MiddleLayout />
      </div>
      <div style={{ backgroundColor: "grey" }}>
        <CustomRecapLayout />
      </div>
    </div>
  );
}

export default StartingLayout;
