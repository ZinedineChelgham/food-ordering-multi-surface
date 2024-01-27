import React, { useEffect } from "react";
import "./styles/_GamePage.css";
import PongGame from "./game/PongGame";

function GamePage() {
  useEffect(() => {
    new PongGame(4);
  }, []);

  return (
    <div>
      <div className="score-container"></div>
      <div className="ball" id="ball"></div>
      <div className="paddle-side top" id="player-paddle-top"></div>
      <div className="paddle-side bottom" id="player-paddle-bot"></div>
      <div className="paddle-side top" id="player-paddle-top2"></div>
      <div className="paddle-side bottom" id="player-paddle-bot2"></div>
      <div id="left-btn">
        <button>&#8592;</button>
        <button>&#8594;</button>
      </div>
      <div id="right-btn">
        <button>&#8592;</button>
        <button>&#8594;</button>
      </div>
      <div id="top-btn">
        <button>&#8592;</button>
        <button>&#8594;</button>
      </div>
      <div id="bottom-btn">
        <button>&#8592;</button>
        <button>&#8594;</button>
      </div>
    </div>
  );
}

export default GamePage;
