import { tagI } from './../../redux/tags/tagsInterfaces';
import { BarChartProps } from 'src/components/elements/chart/BarChart';

export const handleTagsChartData = (elements: tagI[]): BarChartProps => {
  console.log('categories', elements);
  let labels: string[] = [];
  let values: number[] = [];

  if (elements) {
    elements
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

const categoriesLabelsMockData = [
  'Meals & Entertainment',
  'Advertising & Marketing',
  'Bank Charges & Fees',
];

const categoriesValuesMockData = [300, 200, 100];
