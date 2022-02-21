import { responseToCurrencyModel } from '@redux/common/mappers';
import { categoryI } from '@redux/categories/types';

export const responseToCategoriesModel = (categories: any[]): categoryI[] => {
  return categories.map((category) => responseToCategoryModel(category));
};

export const responseToCategoryModel = (category: any): categoryI => {
  return {
    id: category['id'],
    name: category['name'],
    spent: category['spent'],
    currency: responseToCurrencyModel(category['currency']),
    monthlyBudget: category['monthly_budget'],
  };
};
