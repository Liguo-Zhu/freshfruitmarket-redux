import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const onOffSlice = createSlice({
  name: "cartIsOpen",
  initialState: initialState,
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
