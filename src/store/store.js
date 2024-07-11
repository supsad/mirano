import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@store/reducers/cartSlice.js';
import orderReducer from '@store/reducers/orderSlice.js';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
