export interface tagsI {
  tags: tagI[];
}

export interface tagI {
  code: string;
  created: string;
  currency: tagCurrencyI;
  currencyCode: string;
  id: number;
  isFavorite: boolean;
  name: string;
  receiptsCount: number;
  source: string;
  spent: number;
  status: string;
  type: string;
  weight: number;
}

export interface tagCurrencyI {
  code: string;
  name: string;
  symbol: string;
}
