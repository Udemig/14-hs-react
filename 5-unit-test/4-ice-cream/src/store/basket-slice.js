import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const newItem = action.payload;
      const { productId, serving } = newItem;

      // Find existing item with same product and serving option
      const existingItem = state.items.find(
        (item) => item.productId === productId && item.serving === serving
      );

      if (existingItem) {
        // If item exists, increase quantity
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        // Add new item
        state.items.push({
          id: `${productId}-${serving}`,
          productId: newItem.productId,
          name: newItem.name,
          price: newItem.price,
          serving: newItem.serving,
          quantity: 1,
          totalPrice: newItem.price,
          imageUrl: newItem.imageUrl,
          accent: newItem.accent,
        });
      }

      // Update totals
      state.totalQuantity++;
      state.totalAmount += newItem.price;
    },

    removeFromBasket: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
        state.totalQuantity++;
        state.totalAmount += existingItem.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          // Remove item if quantity is 1
          state.totalQuantity--;
          state.totalAmount -= existingItem.price;
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.price * existingItem.quantity;
          state.totalQuantity--;
          state.totalAmount -= existingItem.price;
        }
      }
    },

    clearBasket: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
