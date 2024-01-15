import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  DROP_CART,
  UPDATE_RECIPE,
  SET_ID,
} from "./types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      if (state.cartItems.find((item) => item._id === action.payload._id)) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id
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
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    }
    case DECREASE_QUANTITY: {
      if (state.cartItems.find((item) => item._id === action.payload._id)) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id
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
    case DROP_CART: {
      return {
        ...state,
        cartItems: [],
      };
    }
    case UPDATE_RECIPE: {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id
            ? { ...item, recipe: action.payload.recipe }
            : item
        ),
      };
    }
    case SET_ID: {
      return {
        ...state,
        id: action.payload,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
