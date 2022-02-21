import { chartI, currencyI } from '@redux/common/types';

export interface categoriesI {
  categories: categoryI[];
}

export interface categoryI extends chartI {
  id: number;
  currency: currencyI;
  monthlyBudget: number;
}
