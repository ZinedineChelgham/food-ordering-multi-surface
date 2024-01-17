// OrderItem.js
import React from "react";
import "./styles/_OrderItem.css";

const OrderItem = ({ item, handleOnDragStart, isRecapUnit }) => {
  const completeName = item.name + " - " + item.price;
  const nameToArray = completeName.split("");

  console.log(handleOnDragStart);

  return (
    <div
      className="item-container"
      draggable
      onDragStart={(e) => handleOnDragStart && handleOnDragStart(e)}
    >
      <img src={item.image} alt="" />
      <div className="badge">
        {!isRecapUnit &&
          nameToArray.map((letter, index) => (
            <span
              key={index} // Adding a unique key for each span element
              className={`char${index + 1}`}
            >
              {letter}
            </span>
          ))}
      </div>
    </div>
  );
};

export default OrderItem;
