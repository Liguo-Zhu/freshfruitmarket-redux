import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import onOffSlice from "./onOffSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    onOffStatus: onOffSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
