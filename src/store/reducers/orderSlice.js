import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  orderId: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    openOrder: (state) => {
      state.isOpen = true;
    },

    closeOrder: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openOrder, closeOrder } = orderSlice.actions;

export default orderSlice.reducer;
