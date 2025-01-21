import { createSlice } from '@reduxjs/toolkit';
import detail from "../components/ProductData"; // Adjust the path if necessary

const initialState = {
  cart: [],
  items: detail,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (findIndex >= 0) {
        state.cart[findIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    getCartTotal: (state) => {
      const { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const price = parseFloat(cartItem.price) || 0; // Ensure price is numeric
          const quantity = cartItem.quantity || 0;
          const itemTotal = price * quantity;

          cartTotal.totalQuantity += quantity;
          cartTotal.totalPrice += itemTotal;
          return cartTotal;
        },
        {
          totalQuantity: 0,
          totalPrice: 0,
        }
      );

      state.totalQuantity = totalQuantity;
      state.totalPrice = parseFloat(totalPrice.toFixed(2)); // Ensure 2 decimal places
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (findIndex >= 0) {
        state.cart[findIndex].quantity += 1;
      }
    },
    decrement: (state, action) => {
      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (findIndex >= 0) {
        if (state.cart[findIndex].quantity > 1) {
          state.cart[findIndex].quantity -= 1;
        } else {
          state.cart.splice(findIndex, 1);
        }
      }
    },
  },
});

export const { addtocart, increment, getCartTotal, decrement, remove } = cartSlice.actions;

export default cartSlice.reducer;
