import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '@/fetchData';
import { API_URL } from '@/constants';

export const registerCart = createAsyncThunk(
  'cart/registerCart',
  async (_, thunkAPI) => {
    const errMessage = 'Не удалось зарегистрировать корзину';

    try {
      return await fetchData(
        '/api/cart/register',
        { method: 'POST', credentials: 'include' },
        errMessage,
      );
    } catch (err) {
      return thunkAPI.rejectWithValue(`${err.response.status} - ${err.response.statusText}`, errMessage);
    }
  },
);

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, thunkAPI) => {
    const errMessage = 'Не удалось получить данные корзины';

    try {
      return await fetchData(
        '/api/cart',
        { method: 'GET', credentials: 'include' },
        'Не удалось получить данные корзины',
      );
    } catch (err) {
      return thunkAPI.rejectWithValue(`${err.response.status} - ${err.response.statusText}`, errMessage);
    }
  },
);

export const addItemToCart = createAsyncThunk(
  'cart/addItemToCart',
  async ({ productId, quantity }, thunkAPI) => {
    const errMessage = 'Не удалось отправить товар в корзину';

    try {
      const response = await fetch(`${API_URL}/api/cart/items`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity })
      });

      return await response.json();

      // return await fetchData(
      //   '/api/cart/items',
      //   {
      //     method: 'POST',
      //     credentials: 'include',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ productId, quantity })
      //   },
      //   errMessage,
      // );
    } catch (err) {
      return thunkAPI.rejectWithValue(`${err.response.status} - ${err.response.statusText}`, errMessage);
    }
  },
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
