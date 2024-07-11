import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APU_URL } from '@/const.js';

const PRODUCT_URL = '/api/products';

export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods',
  async () => {
    const response = await fetch(`${ APU_URL }${ PRODUCT_URL }`);

    return await response.json();
  }
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const GoodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default GoodsSlice.reducer
