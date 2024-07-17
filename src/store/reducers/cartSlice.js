import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '@/fetchData';

export const registerCart = createAsyncThunk(
  'cart/registerCart',
  () => fetchData(
    '/api/cart/register',
    { method: 'POST', credentials: 'include' },
    'Не удалось зарегистрировать корзину',
  ),
);

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  () => fetchData(
    '/api/cart',
    { method: 'GET', credentials: 'include' },
    'Не удалось получить данные корзины',
  ),
);

export const addItemToCart = createAsyncThunk(
  'cart/addItemToCart',
  ({ productId, quantity }) => fetchData(
    '/api/cart/items',
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, quantity })
    },
    'Не удалось отправить товар в корзину'
  ),
)

const initialState = {
  isOpen: false,
  items: [],
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
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accessKey = action.payload.accessKey;
      })
      .addCase(registerCart.rejected, (state, action) => {
        state.status = 'failed';
        state.accessKey = '';
        state.error = action.error.message;
      })
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addItemToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const { toggleCart} = cartSlice.actions;

export default cartSlice.reducer;
