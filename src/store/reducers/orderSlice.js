import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  orderId: '',
  data: {
    buyerName: '',
    buyerPhone: '',
    recipientName: '',
    recipientPhone: '',
    street: '',
    house: '',
    apartment: '',
    paymentOnline: 'true',
    deliveryDate: '',
    deliveryTime: '',
  },
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

    clearOrderData: (state) => {
      state.data = {
        buyerName: '',
        buyerPhone: '',
        recipientName: '',
        recipientPhone: '',
        street: '',
        house: '',
        apartment: '',
        paymentOnline: true,
        deliveryDate: '',
        deliveryTime: '',
      };
    },

    updateOrderData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const {
  openOrder,
  closeOrder,
  clearOrderData,
  updateOrderData,
} = orderSlice.actions;

export default orderSlice.reducer;
