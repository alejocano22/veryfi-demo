import {
  moneyI,
  quarterCategoryI,
  quarterCategoriesI,
  quarterPeriodI,
} from '@redux/money/types';

export const responseToMoneyModel = (money: any): moneyI => {
  return {
    labels: money['labels'],
    totals: money['totals'],
  };
};

export const responseToQuarterCategoriesModel = (
  quarter: any[]
): quarterCategoriesI => {
  return {
    categories: quarter['categories'].map((category) =>
      toQuarterCategoryModel(category)
    ),
    months: getQuarterMonths(quarter['periods']),
  };
};

const toQuarterCategoryModel = (category: any): quarterCategoryI => {
  return {
    id: category['id'],
    name: category['name'],
    periods: toQuarterPeriodsModel(category['periods']),
  };
};

const toQuarterPeriodsModel = (periods: any): quarterPeriodI[] => {
  return periods.map((period) => toQuarterPeriodModel(period));
};

const toQuarterPeriodModel = (period: any): quarterPeriodI => {
  return {
    id: period['id'],
    balance: period['balance'],
    budget: period['budget'],
    spent: period['spent'],
  };
};

const getQuarterMonths = (periods: any): number[] => {
  // const year = new Date(periods[0]['end_date']).getFullYear();
  return periods.map((period: any) => new Date(period['end_date']).getMonth());
};
