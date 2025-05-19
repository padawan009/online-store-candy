import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
  error: null,
  isUserOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      const { phone, password } = action.payload;
      const userExist = state.users.find((user) => user.phone === phone);
      if (userExist) {
        state.error = "Такой пользователь уже зарегистрирован";
      } else {
        const newUser = { phone, password };
        state.users.push(newUser);
        state.currentUser = newUser;
        state.error = null;
      }
    },
    checkUser(state, action) {
      const { phone, password } = action.payload;
      const user = state.users.find(
        (user) => user.phone === phone && user.password === password
      );
      const userPassErr = state.users.find(
        (user) => user.phone === phone && user.password !== password
      );

      if (userPassErr) {
        state.currentUser = null;
        state.error = "Неверный пароль";
      } else if (!user) {
        state.currentUser = null;
        state.error = "Пользователь не найден";
      } else {
        state.currentUser = user;
        state.error = null;
      }
    },
    updateUser(state, action) {
      if (state.currentUser) {
        Object.assign(state.currentUser, action.payload);
      }
    },
    clearError(state) {
      state.error = null;
    },
    openUserModal(state) {
        state.isUserOpen = true;
    },
    exitUser(state) {
        state.currentUser = null;
        state.isUserOpen = false;
    },

  },
});

export const { addUser, checkUser, clearError, openUserModal, exitUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
