import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    type: 'bouquets',
    minPrice: '',
    maxPrice: '',
    category: '',
  },

  search: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      for (const key in action.payload) {
        if (!Object.hasOwnProperty.call(action.payload, key)) continue;

        state.filters[key] = action.payload[key];
      }
    },

    clearFilters: (state) => {
      const filtersClone = { ...state.filters };

      for (const key in filtersClone) {
        filtersClone[key] = '';
      }

      state.filters = filtersClone;
    },

    setSearch: (state, action) => {
        state.search = action.payload;
    },
  },
});

export const {
  setFilters,
  setSearch,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
