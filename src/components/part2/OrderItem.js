// OrderItem.js
import "./styles/_OrderItem.css";
import React, { useState } from "react";

const OrderItem = ({ item, handleOnDragStart, isRecapUnit }) => {
  const [isDragging, setIsDragging] = useState(false);

  const completeName = item.shortName + "-" + item.price + "€";
  const tmpName = completeName;
  const nameToArray = tmpName.split("");

  const handleDragStart = (e) => {
    setIsDragging(true);
    handleOnDragStart && handleOnDragStart(e);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`item-container ${isDragging ? "dragging" : ""}`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <img src={item.image} alt="" />
      <div className="badge">
        {!isRecapUnit &&
          nameToArray.map((letter, index) => (
            <span
              key={index} // Adding a unique key for each span element
              className={`char${index}`}
            >
              {letter}
            </span>
          ))}
      </div>
    </div>
  );
};

export default OrderItem;
