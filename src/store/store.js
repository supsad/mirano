import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@store/reducers/cartSlice.js';
import orderReducer from '@store/reducers/orderSlice.js';
import goodsReducer from '@store/reducers/goodsSlice.js';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    goods: goodsReducer,
  },
});

export default store;
