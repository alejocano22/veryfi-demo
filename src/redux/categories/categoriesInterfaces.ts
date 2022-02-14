export interface categoriesI {
  categories: categoryI[];
}

export interface categoryI {
  code: string;
  currency: currencyI;
  currencyCode: string;
  externalId: string;
  id: number;
  isFavorite: boolean;
  monthlyBudget: number;
  name: string;
  receiptsCount: number;
  spent: number;
  status: string;
  type: string;
  weight: number;
}

export interface currencyI {
  code: string;
  name: string;
  symbol: string;
}
