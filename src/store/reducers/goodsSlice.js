import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APU_URL } from '@/constants.js';

const PRODUCT_URL = '/api/products';

const GoodsType = {
  BOUQUETS: 'Цветы',
  TOYS: 'Игрушки',
  POSTCARDS: 'Открытки',
  DEFAULT: 'Неизвестная категория',
};

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
  title: GoodsType.BOUQUETS,
};

const GoodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoodsTitle: (state, action) => {
      const title = action.payload;

      state.title = Object.values(GoodsType).find(type => type === title)
        || GoodsType.DEFAULT;
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

export const { setGoodsTitle } = GoodsSlice.actions;

export default GoodsSlice.reducer
