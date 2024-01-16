import React, { useState } from "react";
import "./styles/_RecapUnit.css";
import OrderItem from "./OrderItem";

function RecapUnit({}) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleDrop = (e) => {
    const test = e.dataTransfer.getData("menuItem");
    console.log(test);
    const item = JSON.parse(e.dataTransfer.getData("menuItem"));
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div
      className="recap-unit"
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => e.preventDefault()}
    >
      RecapUnit
      {selectedItems.map((item) => (
        <OrderItem key={item.name} item={item} />
      ))}
    </div>
  );
}

export default RecapUnit;
