import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_URL } from '@/constants.js';

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
  title: {
    value: 'Цветы',
    pageYCoord: null,
  },
};

const GoodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoodsTitleValue: (state, action) => {
      state.title.value = action.payload;
    },

    setGoodsTitleCoords: (state, action) => {
      state.title.pageYCoord = window.scrollY + action.payload;
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

export const {
  setGoodsTitleValue,
  setGoodsTitleCoords,
} = GoodsSlice.actions;

export default GoodsSlice.reducer
