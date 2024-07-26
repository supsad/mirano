import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'bouquets',
  minPrice: '',
  maxPrice: '',
  category: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      for (const key in action.payload) {
        if (!Object.hasOwnProperty.call(action.payload, key)) continue;

        state[key] = action.payload[key];
      }
    },

    clearFilters: (state) => {
      for (const key in state) {
        state[key] = '';
      }
    },
  },
});

export const {
  setFilters,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
