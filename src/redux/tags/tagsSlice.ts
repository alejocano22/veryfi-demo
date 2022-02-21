import { RootState } from '@redux/store';
import { createSlice, Slice } from '@reduxjs/toolkit';
import { tagI, tagsI } from '@redux/tags/types';
import { loadTags } from '@redux/tags/thunks';

const initialState: tagsI = {
  tags: null,
};

export const tagsSlice: Slice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadTags.fulfilled, (state, action) => {
      state.tags = action.payload;
    });
  },
});

export const selectTags = (state: RootState): tagI[] => state.tagsSlice.tags;

export default tagsSlice.reducer;
