import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPaymentOpen: false,
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        openPayment(state) {
            state.isPaymentOpen = true;
        },
        closePayment(state) {
            state.isPaymentOpen = false;
        }
    },
})

export const { openPayment, closePayment } = paymentSlice.actions;
export default paymentSlice.reducer;