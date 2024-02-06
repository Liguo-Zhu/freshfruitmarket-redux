import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  quantity: number;
}

const initialState: Array<CartItem> = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCartQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.find((item) => item.id === id) == null) {
        return [...state, { id, quantity: 1 }];
      } else {
        return state.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    },
    decreaseCartQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.find((item) => item.id === id)?.quantity === 1) {
        return state.filter((item) => item.id !== id);
      } else {
        return state.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const {
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
