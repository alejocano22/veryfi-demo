// import { categoryI } from './categories.d.ts';
import { RootState } from '../store';

export const selectCategories = (state: RootState): categoryI[] =>
  state.categoriesSlice.categories;
