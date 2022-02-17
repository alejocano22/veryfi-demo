import { createSlice, Slice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { loadMoneyIn, loadMoneyOut, loaLastQuarter } from './moneyThunks';

const initialState: moneySliceI = {
  in: null,
  out: null,
  lastQuarter: null,
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
    builder.addCase(loaLastQuarter.fulfilled, (state, action) => {
      state.lastQuarter = action.payload;
    });
  },
});

export const selectMoneyIn = (state: RootState): moneyI => state.moneySlice.in;
export const selectMoneyOut = (state: RootState): moneyI =>
  state.moneySlice.out;
export const selectLastQuarter = (state: RootState): QuarterCategoryI[] =>
  state.moneySlice.lastQuarter;

export default moneySlice.reducer;
