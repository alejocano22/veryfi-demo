import { categoriesI, categoryI, currencyI } from './categoriesInterfaces';

export const responseToCategoriesModel = (categories: any[]): categoryI[] => {
  return categories.map((category) => responseToCategoryModel(category));
};

export const responseToCategoryModel = (category: any): categoryI => {
  return {
    code: category['code'],
    currency: responseToCurrencyModel(category['currency']),
    currencyCode: category['currency_code'],
    externalId: category['external_id'],
    id: category['id'],
    isFavorite: category['is_favorite'],
    monthlyBudget: category['monthly_budget'],
    name: category['name'],
    receiptsCount: category['receipts_count'],
    spent: category['spent'],
    status: category['status'],
    type: category['type'],
    weight: category['weight'],
  };
};

export const responseToCurrencyModel = (currency: any): currencyI => {
  return {
    code: currency['code'],
    name: currency['name'],
    symbol: currency['symbol'],
  };
};
