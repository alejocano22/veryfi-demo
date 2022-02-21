import { createSlice, Slice } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';
import { loadCategories } from '@redux/categories/thunks';
import { categoriesI, categoryI } from '@redux/categories/types';

const initialState: categoriesI = {
  categories: null,
};

export const categoriesSlice: Slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const selectCategories = (state: RootState): categoryI[] =>
  state.categoriesSlice.categories;

export default categoriesSlice.reducer;
