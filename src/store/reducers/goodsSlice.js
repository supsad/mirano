import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_URL } from '@/constants.js';

const GoodsTitle = {
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
      `${ API_URL }/api/products${ queryString ? `?${ queryString }` : '' }`
    );

    return await response.json();
  },
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  title: GoodsTitle.BOUQUETS,
};

const GoodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoodsTitle: (state, action) => {
      const title = action.payload;
      state.title = Object.values(GoodsTitle).find(type => type === title)
        || GoodsTitle.DEFAULT;
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
