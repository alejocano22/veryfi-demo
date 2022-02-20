import { tagI } from './tagsInterfaces';
import { RootState } from '../store';

export const selectTags = (state: RootState): tagI[] => state.tagsSlice.tags;
