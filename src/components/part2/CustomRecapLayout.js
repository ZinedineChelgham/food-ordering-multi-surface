import React from "react";
import "./styles/_CustomRecapLayout.css"; // Corrected import path
import RecapUnit from "./RecapUnit";

function CustomRecapLayout() {
  return (
    <div id="recap-layout">
      <RecapUnit />
      <RecapUnit />
    </div>
  );
}

export default CustomRecapLayout;
