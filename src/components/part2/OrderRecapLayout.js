import React from "react";
import "./styles/_OrderRecapLayout.scss";
import beverage from "./img/beverage.png";
import "./OrderRecapLayout.css";

function OrderRecapLayout() {
  return (
      <div className="recapScreen">
        <div style={{marginTop:"2vh"}} className="greenTextXL"> Recapitulatif des entrées </div>
        <div className="recapDiv">
          <div className="buttonStyle rotateMinus90">
            <div className="greenText"> Retour </div>
            <button className="buttonAction rotateMinus90"> > </button>

          </div>


          <div id="order-recap">
            <div className="price">11€</div>
            <ul className="circle-container">
              <li>
                <img src={beverage} alt="City" />
              </li>
              <li>
                <img src="http://lorempixel.com/100/100/nature" alt="Nature" />
              </li>
              <li>
                <img src={beverage} alt="Abstract" />
              </li>
              <li>
                <img src={beverage} alt="Cats" />
              </li>
              <li>
                <img src="http://lorempixel.com/100/100/food" alt="Food" />
              </li>
              <li>
                <img src="http://lorempixel.com/100/100/animals" alt="Animals" />
              </li>
              <li>
                <img src="http://lorempixel.com/100/100/business" alt="Business" />
              </li>
              <li>
                <img src="http://lorempixel.com/100/100/people" alt="People" />
              </li>
            </ul>
          </div>
          <div className="buttonStyle rotate90">
            <div className="greenText">Suivant</div>
            <button className="buttonAction rotateMinus90"> > </button>

          </div>
        </div>
        <div style={{marginBottom:"2vh"}} className="greenTextXL rotate180"> Recapitulatif des entrées </div>
      </div>

  );
}

export default OrderRecapLayout;
