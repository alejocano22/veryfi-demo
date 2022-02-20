import { RootState } from '../store';
import { projectI } from './projectsInterfaces';

export const selectProjects = (state: RootState): projectI[] =>
  state.projectsSlice.projects;
