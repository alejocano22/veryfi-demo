import { createSlice, Slice } from '@reduxjs/toolkit';
import { tagsI } from './tagsInterfaces';
import { loadTags } from './tagsThunks';

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

export default tagsSlice.reducer;
