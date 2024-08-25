import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [], products: [] };

const firstSlice = createSlice({
  name: "firstSlice",
  initialState,
  reducers: {
    listItems: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { listItems } = firstSlice.actions;

export default firstSlice.reducer;
