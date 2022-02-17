interface categoriesI {
  categories: categoryI[];
}

interface categoryI {
  code: string;
  currency: categoryCurrencyI;
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

interface categoryCurrencyI {
  code: string;
  name: string;
  symbol: string;
}
