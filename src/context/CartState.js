import React from "react";
import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  DROP_CART,
  UPDATE_RECIPE,
} from "./types";
import cartContext from "./CartContext";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item, quantity) => {
    dispatch({ type: ADD_TO_CART, payload: { ...item, quantity: quantity } });
  };
  const decreaseQuantity = (item) => {
    dispatch({ type: DECREASE_QUANTITY, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  const dropCart = () => {
    dispatch({ type: DROP_CART });
  };

  const updateRecipe = (id, recipe) => {
    dispatch({ type: UPDATE_RECIPE, payload: { id, recipe } });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        decreaseQuantity,
        dropCart,
        updateRecipe,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
