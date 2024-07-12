import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APU_URL } from '@/constants.js';

const PRODUCT_URL = '/api/products';

export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods',
  async (params) => {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(
      `${ APU_URL }${ PRODUCT_URL }${ queryString ? `?${ queryString }` : '' }`
    );

    return await response.json();
  },
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  type: {
    'default-type': 'bouquets',
    rendered: null,
    title: 'Цветы',
  },
};

const GoodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoodsType: (state, action) => {
      const { rendered, title } = action.payload;
      state.type.rendered = rendered;
      state.type.title = title;
    },
  },
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

export const { setGoodsType } = GoodsSlice.actions;

export default GoodsSlice.reducer
