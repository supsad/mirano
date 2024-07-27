import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '@/fetchData';
import { fetchCart, toggleCart } from '@store/reducers/cartSlice';
import getUserLocalDate from '@utils/calculateDeliveryDate';

export const sendOrder = createAsyncThunk(
  'order/sendOrder',
  async (_, thunkAPI) => {
    const {
      order: {
        data: {
          buyerName,
          buyerPhone,
          recipientName,
          recipientPhone,
          street,
          house,
          apartment,
          paymentOnline,
          deliveryDate,
          deliveryTime,
        }
      }
    } = thunkAPI.getState();

    const orderData = {
      'buyer': {
        'name': buyerName,
        'phone': buyerPhone,
      },
      'recipient': {
        'name': recipientName,
        'phone': recipientPhone,
      },
      'address': `ул. ${ street }, дом ${ house }, кв. ${ apartment }`,
      paymentOnline,
      deliveryDate,
      deliveryTime,
    };

    const errMessage = 'Не удалось отправить заказ!';

    try {
      const response = await fetchData(
        '/api/orders',
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        },
        errMessage,
      );

      thunkAPI.dispatch(clearOrderData());
      thunkAPI.dispatch(toggleCart());
      thunkAPI.dispatch(fetchCart());

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(`${ err.response.status } - ${ err.response.statusText }`, errMessage);
    }
  },
);

const [year, month, day] = getUserLocalDate();

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
    deliveryDate: `${year}-${month}-${day}`,
    deliveryTime: 'с 9:00 до 12:00',
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
        deliveryDate: `${year}-${month}-${day}`,
        deliveryTime: 'с 9:00 до 12:00',
      };
    },

    updateOrderData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orderId = action.payload.orderId;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  openOrder,
  closeOrder,
  clearOrderData,
  updateOrderData,
} = orderSlice.actions;

export default orderSlice.reducer;
