export const getLastQuarter = (): { startDate: string; endDate: string } => {
  const today = new Date();
  const quarter = Math.floor(today.getMonth() / 3);
  const startFullQuarter = new Date(today.getFullYear(), quarter * 3 - 3, 1);
  const endFullQuarter = new Date(
    startFullQuarter.getFullYear(),
    startFullQuarter.getMonth() + 3,
    0
  );
  return {
    startDate: startFullQuarter.toISOString().split('T')[0],
    endDate: endFullQuarter.toISOString().split('T')[0],
  };
};

export const toLastQuarterTable = (lastQuarter: QuarterCategoryI[]) => {
  return lastQuarter.map((category) => {
    const periods = {};
    category.periods.forEach((period, index) => {
      periods['budgetMonth' + index] = period.budget;
      periods['spentMonth' + index] = period.spent;
      periods['balanceMonth' + index] = period.balance;
    });
    return {
      category: category.name,
      ...periods,
    };
  });
};
