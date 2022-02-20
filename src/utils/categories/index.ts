import { tagsI } from './../../redux/tags/tagsInterfaces';
import { BarChartProps } from 'src/components/elements/charts/BarChart';

export const handleCategoriesChartData = (
  categories: categoryI[]
): BarChartProps => {
  let labels: string[] = [];
  let values: number[] = [];

  if (categories) {
    categories
      .filter((category) => category.spent > 0)
      .map((c) => {
        labels.push(c.name);
        values.push(c.spent);
      });
    if (labels.length === 0) {
      return {
        labels: categoriesLabelsMockData,
        values: categoriesValuesMockData,
        mock: true,
      };
    }
  }
  return {
    labels,
    values,
    mock: false,
  };
};

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

export const createDate = (days: number, months: number, years: number) => {
  var date = new Date();
  date.setDate(date.getDate() + days);
  date.setMonth(date.getMonth() + months);
  date.setFullYear(date.getFullYear() + years);
  return date;
};

const categoriesLabelsMockData = [
  'Meals & Entertainment',
  'Advertising & Marketing',
  'Bank Charges & Fees',
];

const categoriesValuesMockData = [300, 200, 100];
