import React from "react";
import beverage from "./img/beverage.png";
import "./BeforeTheGame.css";
import { useNavigate } from "react-router";

function BeforeTheGame() {
  const navigate = useNavigate();

  return (
    <div className="validationGameScreen">
      <div className="topp rotate180" style={{ marginTop: "2vh" }}>
        <div className="buttonContainer">
          <button className="buttonValidate"> ✔ </button>
          <button className="buttonRefuse"> ✖ </button>
        </div>
        <div className="textContainer">
          <div className="greenTextXL"> Et si on jouait à un</div>
          <div className="greenTextXL"> petit jeu en attendant ?</div>
        </div>
        <div className="buttonContainer">
          <button className="buttonRefuse"> ✖ </button>
          <button className="buttonValidate"> ✔ </button>
        </div>
      </div>
      <div className="circleContainer">
        <p className="textFlex">
          Votre commande
          <br />
          est en cours
          <br />
          de préparation!
        </p>
      </div>
      <div className="bottomm" style={{ marginBottom: "2vh" }}>
        <div className="buttonContainer">
          <button
            className="buttonValidate"
            onClick={() => {
              navigate("/game");
            }}
          >
            {" "}
            ✔{" "}
          </button>
          <button className="buttonRefuse"> ✖ </button>
        </div>
        <div className="textContainer">
          <div className="greenTextXL"> Et si on jouait à un</div>
          <div className="greenTextXL"> petit jeu en attendant ?</div>
        </div>
        <div className="buttonContainer">
          <button className="buttonRefuse"> ✖ </button>
          <button className="buttonValidate"> ✔ </button>
        </div>
      </div>
    </div>
  );
}

export default BeforeTheGame;
