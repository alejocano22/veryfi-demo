import { categoryI } from './categoriesInterfaces';
import { RootState } from '../store';

export const selectCategories = (state: RootState): categoryI[] =>
  state.categoriesSlice.categories;
