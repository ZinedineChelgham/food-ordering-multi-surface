import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router";

function OrderBar({ leftText, totalPrice, onClick }) {
  const { cartItems } = React.useContext(CartContext);
  const navigate = useNavigate();

  const getCartTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  };

  console.log(cartItems);

  return (
    <Paper
        style={{
            display: 'flex',
            alignItems: 'center'}}
      elevation={3}
      onClick={() => navigate('/ordersummary', { state: { cartItems } })}
      sx={{
        height: "100%",
        backgroundColor: "yellow",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "lightyellow",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{ flexGrow: 1, fontSize: "4vw", fontFamily: "Arial" }}
      >
        Aller à la commande 🛒
      </Typography>
      <Typography variant="h6" style={{ fontSize: "4vw", fontFamily: "Arial" }}>
        Total : {getCartTotal()} €
      </Typography>
    </Paper>
  );
}

export default OrderBar;
