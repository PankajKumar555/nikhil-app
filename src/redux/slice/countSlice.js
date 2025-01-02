import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: false,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setCount } = countSlice.actions;
export const selectCount = (state) => state.count;
export default countSlice.reducer;
