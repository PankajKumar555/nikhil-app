import { configureStore } from "@reduxjs/toolkit";
import cartIdReducer from "../slice/orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartIdReducer, // Add the cart reducer to the store
  },
});
