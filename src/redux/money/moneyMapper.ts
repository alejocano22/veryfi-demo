export const responseToMoneyModel = (money: any): moneyI => {
  return {
    labels: money['labels'],
    totals: money['totals'],
  };
};

export const responseToQuarterCategoriesModel = (
  quarter: any[],
  months: string[]
): QuarterI => {
  return {
    categories: quarter['categories'].map((category) =>
      toQuarterCategoryModel(category)
    ),
    months: getQuarterMonths(quarter['periods'], months),
  };
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

const getQuarterMonths = (periods: any, months: string[]): string[] => {
  const year = new Date(periods[0]['end_date']).getFullYear();
  return periods.map(
    (period: any) =>
      `${months[new Date(period['end_date']).getMonth()]} ${year}`
  );
};
