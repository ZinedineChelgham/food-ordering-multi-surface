import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import burger from "../../assets/img/burger/burger.png";
import BasicCard from "./BasicCard";
import CartContext from "../../context/CartContext";

function FoodItemCard({ item }) {
  const { addToCart, cartItems } = React.useContext(CartContext);

  const getActionArea = () => {
    return (
      <CardMedia component="img" height="100" image={burger} alt="big burger" />
    );
  };

  const getContent = () => {
    return (
      <>
        <Typography marginBottom={0} gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}€
        </Typography>
      </>
    );
  };

  return (
    <BasicCard
      actionArea={getActionArea()}
      content={getContent()}
      onFoodItemClick={() => {
        console.log("Adding item in the cart", item);
        addToCart(item);
        console.log("Cart state", cartItems);
      }}
    />
  );
}

export default FoodItemCard;
