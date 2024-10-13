import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

const currensySlise = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});

export const currencyReducer = currensySlise.reducer;
