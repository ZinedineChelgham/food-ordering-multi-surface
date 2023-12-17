import React, { useState, useContext } from "react";
import CartContext from "../../context/CartContext";

const SupplementItem = ({ name, price, url, item }) => {
  const [quantity, setQuantity] = useState(0);
  const cart = React.useContext(CartContext);

  const handleIncrease = () => {
    cart.addToCart(item, 1);
    setQuantity((prevQuantity) => prevQuantity + 1);
    console.log(cart);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      //cart.removeItem(item.id);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: "10vw",
      }}
    >
      <div style={{ flex: "1" }}>
        {console.log(url)}
        <img src={url} alt={name} style={{ width: "100px", height: "100px" }} />
      </div>
      <div style={{ flex: "2", textAlign: "left" }}>
        <div>{name}</div>
        <div>{price} €</div>
      </div>
      <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
        <button
          onClick={handleDecrease}
          style={{ width: "30px", height: "30px", marginRight: "5px" }}
        >
          -
        </button>
        <div>{quantity}</div>
        <button
          onClick={handleIncrease}
          style={{ width: "30px", height: "30px", marginLeft: "5px" }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SupplementItem;
