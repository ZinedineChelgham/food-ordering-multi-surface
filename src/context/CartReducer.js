import {SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, DECREASE_QUANTITY} from "./types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case DECREASE_QUANTITY: {
        if (state.cartItems.find((item) => item.id === action.payload.id)) {
            return {
            ...state,
            cartItems: state.cartItems.map((item) =>
                item.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            };
        } else {
            return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
            };
        }
    }

    default:
      return state;
  }
};

export default CartReducer;
