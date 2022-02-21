import { createSlice, Slice } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';
import { moneyI, moneySliceI, quarterCategoryI } from '@redux/money/types';
import { loadMoneyIn, loadMoneyOut, loadQuarter } from '@redux/money/thunks';

const initialState: moneySliceI = {
  in: null,
  out: null,
  quarter: {
    categories: null,
    months: null,
  },
};

export const moneySlice: Slice = createSlice({
  name: 'money',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadMoneyIn.fulfilled, (state, action) => {
      state.in = action.payload;
    });
    builder.addCase(loadMoneyOut.fulfilled, (state, action) => {
      state.out = action.payload;
    });
    builder.addCase(loadQuarter.fulfilled, (state, action) => {
      state.quarter = action.payload;
    });
  },
});

export const selectMoneyIn = (state: RootState): moneyI => state.moneySlice.in;

export const selectMoneyOut = (state: RootState): moneyI =>
  state.moneySlice.out;

export const selectQuarterCategories = (state: RootState): quarterCategoryI[] =>
  state.moneySlice.quarter.categories;

export const selectQuarterMonths = (state: RootState): number[] =>
  state.moneySlice.quarter.months;

export default moneySlice.reducer;
