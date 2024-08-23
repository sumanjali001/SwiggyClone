import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.items.find(
        (item) => item.card.info.id === action.payload
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.items.find(
        (item) => item.card.info.id === action.payload
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart: () => {
      return { items: [] };
    },
  },
});

export const {
  addItems,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCurrentItemQuantity = (id) => (state) =>
  state.cart.items.find((item) => item.card.info.id === id)?.quantity ?? 0;

export const getAllItemsTotalPrice = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.totalPrice, 0);

export const getAllItemsQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
