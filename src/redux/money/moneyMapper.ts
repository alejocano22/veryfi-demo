export const responseToMoneyModel = (money: any): moneyI => {
  return {
    labels: money['labels'],
    totals: money['totals'],
  };
};

export const responseToQuarterCategoriesModel = (
  quarterCategories: any[]
): QuarterCategoryI[] => {
  return quarterCategories.map((category) => toQuarterCategoryModel(category));
};

const toQuarterCategoryModel = (category: any): QuarterCategoryI => {
  return {
    id: category['id'],
    name: category['name'],
    periods: toQuarterPeriodsModel(category['periods']),
  };
};

const toQuarterPeriodsModel = (periods: any): QuarterPeriodI[] => {
  return periods.map((period) => toQuarterPeriodModel(period));
};

const toQuarterPeriodModel = (period: any): QuarterPeriodI => {
  return {
    id: period['id'],
    balance: period['balance'],
    budget: period['budget'],
    spent: period['spent'],
  };
};
