import { configureStore } from "@reduxjs/toolkit";
import candiesReducer from "../pages/Candies/candiesSlice";
import boxesReducer from "../pages/GiftBoxes/boxesSlice";
import mixesReducer from "../pages/Mixes/mixesSlice";
import setsReducer from "../pages/CandySets/setsSlice"
import otherReducer from "../pages/Other/otherSlice"
import homeReducer from "../pages/Home/homeSlice"
import holidaysReducer from "../pages/Holidays/holidaysSlice"
import cartReducer from "../pages/Cart/cartSlice"
import loginModalReducer from "../pages/Profile/ui/LoginModal/loginModalSlice"
import userReducer from "../pages/Profile/ui/UserModal/userSlice"
import editUserReducer from "../pages/Profile/ui/EditModal/editSlice"
import paymentReducer from "../pages/Delivery/ui/PaymentModal/paymentSlice"

const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
const savedCurrentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

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
    loginModal: loginModalReducer,
    user: userReducer,
    edit: editUserReducer,
    payment: paymentReducer,
  },
  preloadedState: {
    cart: {
      items: savedCart,
    },
    user: {
      users: savedUsers,
      currentUser: savedCurrentUser,
      error: null,
      isUserOpen: false,
    }
  }
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cartItems", JSON.stringify(state.cart.items));
  localStorage.setItem("users", JSON.stringify(state.user.users));
  localStorage.setItem("currentUser", JSON.stringify(state.user.currentUser));
})
