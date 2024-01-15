import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BasicCard from "./BasicCard";
import React from "react";
import CartContext from "../../context/CartContext";
import { cloneNode } from "@babel/types";

function FoodItemCard({
  item,
  setSupplement,
  indexBurger,
  setRecipe,
  setCurrentChoice,
}) {
  const { addToCart, cartItems } = React.useContext(CartContext);

  const getActionArea = () => {
    return (
      <CardMedia
        style={{ borderRadius: "inherit", height: "14vh" }}
        component="img"
        image={item.image}
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
          {item.shortName}
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
        // if (item.shortName === "pizza") { // Remove notion of supplement
        //   setSupplement(true);
        //   indexBurger(0);
        //   setRecipe(item.recipe);
        //   setCurrentChoice(item);
        // }
        console.log("Adding item in the cart", item);
        addToCart(item, 1);
        console.log("Cart state", cartItems);
      }}
    />
  );
}

export default FoodItemCard;
