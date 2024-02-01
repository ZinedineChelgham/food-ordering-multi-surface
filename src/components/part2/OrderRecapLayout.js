import React from "react";
import "./styles/_OrderRecapLayout.scss";
import beverage from "./img/beverage.png";

function OrderRecapLayout() {
  return (
    <div id="order-recap">
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
  );
}

export default OrderRecapLayout;
