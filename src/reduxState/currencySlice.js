import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchLatestRates,
} from './operations';

const currensySlise = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
    rates: [],
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(fetchLatestRates.fulfilled, (state, action) => {
        state.rates = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchLatestRates.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchLatestRates.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const currencyReducer = currensySlise.reducer;
export const { setBaseCurrency } = currensySlise.actions;
