import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existItem = state.items.find(
        (item) => item.title === newItem.title && item.weight === newItem.weight
      );

      if (existItem) existItem.quantity += newItem.quantity;
      else state.items.push(newItem);
    },
    clearCart(state) {
        state.items = [];
    }
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
