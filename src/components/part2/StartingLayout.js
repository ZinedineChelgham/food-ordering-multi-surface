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
    backgroundColor: "#F9F5E3",
  };

  return (
    <div style={style}>
      <div>
        <CustomRecapLayout />
      </div>
      <div style={{ backgroundColor: "yellow" }}>
        <MiddleLayout />
      </div>
      <div>
        <CustomRecapLayout />
      </div>
    </div>
  );
}

export default StartingLayout;
