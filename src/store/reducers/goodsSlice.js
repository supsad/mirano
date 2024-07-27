import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetchData from '@/fetchData';

export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods',
  async (params, thunkAPI) => {
    const errMessage = 'Не удалось получить список товаров';

    try {
      const queryString = new URLSearchParams(params).toString();
      return await fetchData(
        `/api/products${queryString && '?' + queryString}`,
        { method: 'GET' },
        errMessage,
      );
    } catch (err) {
      return thunkAPI.rejectWithValue(`${err.response.status} - ${err.response.statusText}`, errMessage);
    }
  },
);

const initialState = {
  items: [],
  categories: [],
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
        state.categories = [];
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        action.payload.forEach(product => {
          if (!product.categories) return;

          product.categories.forEach(category => {
            if (state.categories.includes(category)) return;

            state.categories.push(category)
          });
        });
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
