import { createSlice, Slice } from '@reduxjs/toolkit';
import { categoriesI } from './categoriesInterfaces';
import { loadCategories } from './categoriesThunks';

const initialState: categoriesI = {
  categories: null,
};

export const categoriesSlice: Slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategories: (state, action) => {
      return { ...state, ...action.payload.value };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { addCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
