import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'bouquets',
  minPrice: '',
  maxPrice: '',
  category: '',
  search: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      for (const key in action.payload) {
        if (!Object.hasOwnProperty.call(action.payload, key)) continue;

        state[key] = action.payload[key];
      }
    },
  },
});

export const {
  setFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
