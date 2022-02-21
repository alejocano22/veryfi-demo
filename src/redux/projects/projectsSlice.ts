import { createSlice, Slice } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';
import { projectI, projectsI } from '@redux/projects/types';
import { loadProjects } from '@redux/projects/thunks';

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

export const selectProjects = (state: RootState): projectI[] =>
  state.projectsSlice.projects;

export default projectsSlice.reducer;
