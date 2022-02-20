import { createSlice, Slice } from '@reduxjs/toolkit';
import { loadCategories } from './categoriesThunks';

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

export default categoriesSlice.reducer;
