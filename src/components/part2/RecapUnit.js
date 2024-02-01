import React, { useState } from "react";
import "./styles/_RecapUnit.css";
import OrderItem from "./OrderItem";

function RecapUnit() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleDrop = (e) => {
    const test = e.dataTransfer.getData("menuItem");
    console.log(test);
    const item = JSON.parse(e.dataTransfer.getData("menuItem"));
    setSelectedItems([...selectedItems, item]);
  };

  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      <div className="recap-total">Total: {totalPrice}</div>
      <div
        className="recap-unit entry"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => e.preventDefault()}
      >
        {selectedItems.map((item) => (
          <div className="recap-unit-item">
            <OrderItem key={item.name} item={item} isRecapUnit={true} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecapUnit;
