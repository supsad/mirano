import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@store/reducers/cartSlice.js';
import orderReducer from '@store/reducers/orderSlice.js';
import goodsReducer from '@store/reducers/goodsSlice.js';
import filtersReducer from '@store/reducers/filtersSlice';
import choicesReducer from '@store/reducers/choicesSlice';
import searchReducer from '@store/reducers/searchSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    goods: goodsReducer,
    filters: filtersReducer,
    search: searchReducer,
    choices: choicesReducer,
  },
});

export default store;
