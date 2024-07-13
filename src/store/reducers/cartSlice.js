import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
  count: JSON.parse(localStorage.getItem('cartItemsCount') || '0'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },

    addItemToCart: (state, action) => {
      const {
        id,
        count = 1,
        ...params
      } = action.payload;

      const existingItems = state.items.find(item => item.id === id);

      existingItems
        ? existingItems.count = count
        : state.items.push({
          id,
          count,
          ...params,
        });

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    setItemsCountToCart: (state) => {
      const items = state.items;

      state.count = items.reduce((acc, item) => {
        return acc + item.count;
      }, 0);

      localStorage.setItem('cartItemsCount', state.count);
    },
  },
});

export const {
  toggleCart,
  addItemToCart,
  setItemsCountToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
