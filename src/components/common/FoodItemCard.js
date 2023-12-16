import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BasicCard from "./BasicCard";
import React from "react";
import CartContext from "../../context/CartContext";

function FoodItemCard({ item }) {
  const { addToCart, cartItems } = React.useContext(CartContext);

  const getActionArea = () => {
    return (
      <CardMedia
        style={{ borderRadius: "inherit", height: "10vh" }}
        component="img"
        height="100"
        image={item.url}
        alt="big burger"
      />
    );
  };

  const getContent = () => {
    return (
      <>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          marginBottom={0.1}
        >
          {item.name}
        </Typography>
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            color="#fffff"
            fontWeight={"bold"}
            style={{
              backgroundColor: "#ffff00",
              display: "inline-block",
              width: "50%",
            }}
            padding={0.1}
          >
            {item.price} €
          </Typography>
        </div>
      </>
    );
  };

  return (
    <BasicCard
      actionArea={getActionArea()}
      content={getContent()}
      onFoodItemClick={() => {
        console.log("Adding item in the cart", item);
        addToCart(item, 1);
        console.log("Cart state", cartItems);
      }}
    />
  );
}

export default FoodItemCard;
