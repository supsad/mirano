import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetchData from '@/fetchData';

export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods',
  (params) => {
    const queryString = new URLSearchParams(params).toString();
    return fetchData(
      `/api/products${queryString && '?' + queryString}`,
      { method: 'GET' },
      'Не удалось получить список товаров'
    );
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
