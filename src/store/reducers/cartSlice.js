import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APU_URL } from '@/constants';

const REGISTER_URL = '/api/cart/register';

export const registerCart = createAsyncThunk(
  'cart/registerCart',
  async () => {
    const response = fetch(`${ APU_URL }${ REGISTER_URL }`, {
      method: 'POST',
      credentials: 'include',
    });

    return await response.json();
  },
);

const initialState = {
  isOpen: false,
  items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
  count: JSON.parse(localStorage.getItem('cartItemsCount') || '0'),
  status: 'idle',
  accessKey: null,
  error: null,
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

  extraReducers: (builder) => {
    builder
      .addCase('registerCart/pending', (state) => {
        state.status = 'loading';
      })
      .addCase('registerCart/fulfilled', (state, action) => {
        state.status = 'succeeded';
        state.accessKey = action.payload.accessKey;
      })
      .addCase('registerCart/rejected', (state, action) => {
        state.status = 'failed';
        state.accessKey = '';
        state.error = action.error.message;
      })
  }
});

export const {
  toggleCart,
  addItemToCart,
  setItemsCountToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
