import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderId: null, // Initially no cart ID
};

const orderIdSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderId: (state, action) => {
      state.orderId = action.payload; // Save order ID in the Redux store
    },
  },
});

export const { setOrderId } = orderIdSlice.actions;
export const selectOrderId = (state) => state.order.orderId;
export default orderIdSlice.reducer;
