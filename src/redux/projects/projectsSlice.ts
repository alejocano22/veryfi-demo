import { createSlice, Slice } from '@reduxjs/toolkit';
import { projectsI } from './projectsInterfaces';
import { loadProjects } from './projectsThunks';

const initialState: projectsI = {
  projects: null,
};

export const projectsSlice: Slice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
  },
});

export default projectsSlice.reducer;
