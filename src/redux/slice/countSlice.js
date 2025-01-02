import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: false,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setCount: (state, action) => {
      console.log("Dispatched setCount with payload:", action.payload);

      state.count = action.payload; // Save count in the Redux store
    },
  },
});

export const { setCount } = countSlice.actions;
export const selectCount = (state) => state.count;
export default countSlice.reducer;
