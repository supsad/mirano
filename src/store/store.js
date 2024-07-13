import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@store/reducers/cartSlice.js';
import orderReducer from '@store/reducers/orderSlice.js';
import goodsReducer from '@store/reducers/goodsSlice.js';
import filtersReducer from '@store/reducers/filtersSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    goods: goodsReducer,
    filters: filtersReducer,
  },
});

export default store;
