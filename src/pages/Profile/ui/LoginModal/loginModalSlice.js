import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    type: "",
}

const loginModalSlice = createSlice({
    name: "loginModal",
    initialState,
    reducers: {
        openModal(state, action) {
            state.isOpen = true;
            state.type = action.payload;
        },
        closeModal(state) {
            state.isOpen = false;
            state.type = null;
        },
    }
})

export const { openModal, closeModal } = loginModalSlice.actions;
export default loginModalSlice.reducer;