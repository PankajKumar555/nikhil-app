import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartId: null, // Initially no cart ID
};

const cartIdSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartId: (state, action) => {
      state.cartId = action.payload; // Save cart ID in the Redux store
    },
  },
});

export const { setCartId } = cartIdSlice.actions;
export const selectCartId = (state) => state.cart.cartId;
export default cartIdSlice.reducer;
