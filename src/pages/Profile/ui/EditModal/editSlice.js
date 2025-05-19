import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditOpen: false,
}

const editUserSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        openEdit(state) {
            state.isEditOpen = true;
        },
        closeEdit(state) {
            state.isEditOpen = false;
        }
    }
})

export const { openEdit, closeEdit } = editUserSlice.actions;
export default editUserSlice.reducer;