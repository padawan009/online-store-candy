import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    type: "",
}

const profileModalSlice = createSlice({
    name: "profileModal",
    initialState,
    reducers: {
        openModal(state, action) {
            state.isOpen = true;
            state.type = action.payload;
        },
        closeModal(state) {
            state.isOpen = false;
            state.type = null;
        }
    }
})

export const { openModal, closeModal } = profileModalSlice.actions;
export default profileModalSlice.reducer;