export interface moneySliceI {
  in: moneyI;
  out: moneyI;
  quarter: quarterCategoriesI;
}

export interface moneyI {
  labels: string[];
  totals: number[];
}

export interface quarterCategoriesI {
  categories: quarterCategoryI[];
  months: number[];
}

export interface quarterCategoryI {
  id: number;
  name: string;
  periods: quarterPeriodI[];
}

export interface quarterPeriodI {
  id: number;
  balance: number;
  budget: number;
  spent: number;
}
