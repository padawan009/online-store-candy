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
      console.log("addtocart payload:", action.payload);

      const existItem = state.items.find(
        (item) => item.title === newItem.title && item.weight === newItem.weight
      );

      if (existItem) existItem.quantity += newItem.quantity;
      else state.items.push(newItem);
    },

    clearCart(state) {
      state.items = [];
    },

    incrementQuantity(state, action) {
      const { title, weight } = action.payload;
      console.log("increment payload:", action.payload);
      const item = state.items.find(
        (item) => item.title === title && item.weight === weight
      );
      if (item) item.quantity += 1;
    },

    decrementQuantity(state, action) {
      const { title, weight } = action.payload;
      const item = state.items.find(
        (item) => item.title === title && item.weight === weight
      );
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else {
          state.items = state.items.filter(
            (item) => !(item.title === title && item.weight === weight)
          );
        }
      }
    },

    // setQuantity(state, action) {
    //   const { title, weight, quantity } = action.payload;
    //   const item = state.items.find(
    //     (item) => item.title === title && item.weight === weight
    //   );
    //   if (item) item.quantity = quantity;
    // },
  },
});

export const { addToCart, clearCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
