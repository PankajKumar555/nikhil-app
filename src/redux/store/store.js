import { configureStore } from "@reduxjs/toolkit";
import cartIdReducer from "../slice/cartIdSlice";
import orderIdReducer from "../slice/orderIdSlice";
import countReducer from "../slice/countSlice";

export const store = configureStore({
  reducer: {
    cart: cartIdReducer,
    order: orderIdReducer,
    count: countReducer,
  },
});
