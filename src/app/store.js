import { configureStore } from "@reduxjs/toolkit";
import candiesReducer from "../pages/Candies/candiesSlice";
import boxesReducer from "../pages/GiftBoxes/boxesSlice";
import mixesReducer from "../pages/Mixes/mixesSlice";
import setsReducer from "../pages/CandySets/setsSlice"
import otherReducer from "../pages/Other/otherSlice"
import homeReducer from "../pages/Home/homeSlice"
import holidaysReducer from "../pages/Holidays/holidaysSlice"
import cartReducer from "../pages/Cart/cartSlice"

export const store = configureStore({
  reducer: {
    candies: candiesReducer,
    boxes: boxesReducer,
    mixes: mixesReducer,
    sets: setsReducer,
    other: otherReducer,
    home: homeReducer,
    holidays: holidaysReducer,
    cart: cartReducer,
  },
});
