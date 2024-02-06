import { createSlice } from "@reduxjs/toolkit";

export const onOffSlice = createSlice({
  name: "cartIsOpen",
  initialState: false,
  reducers: {
    openCart: (state) => {
      return !state;
    },
    closeCart: (state) => {
      return !state;
    },
  },
});

export const { openCart, closeCart } = onOffSlice.actions;

export default onOffSlice.reducer;
