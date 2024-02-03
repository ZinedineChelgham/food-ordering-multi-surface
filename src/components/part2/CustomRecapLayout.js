import React from "react";
import "./styles/_CustomRecapLayout.css"; // Corrected import path
import RecapUnit from "./RecapUnit";
import entry from "./img/entry.png"; // Corrected import path

function CustomRecapLayout() {
  return (
    <div id="recap-layout">
      <RecapUnit />
      <div className="dish-type-container">
        <h2 style={{color: "#66CA77"}}>Entrées</h2>
        <img src={entry} alt="entry" />
      </div>
      <RecapUnit />
    </div>
  );
}

export default CustomRecapLayout;
