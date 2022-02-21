import { chartI } from '@redux/common/types';
import {
  categoriesLabelsMockData,
  categoriesValuesMockData,
  projectsLabelsMockData,
  projectsValuesMockData,
  tagsLabelsMockData,
  tagsValuesMockData,
} from '@utils';
import { BarChartProps } from '../elements/charts/bar-chart/BarChart';

export const toBarChartData = (
  elements: chartI[],
  type: 'category' | 'tags' | 'projects'
): BarChartProps => {
  let labels: string[] = [];
  let values: number[] = [];

  if (elements) {
    elements
      .filter((category) => category.spent > 0)
      .sort((a, b) => {
        return b.spent - a.spent;
      })
      .map((c) => {
        labels.push(c.name);
        values.push(c.spent);
      });
    if (labels.length === 0) {
      return {
        ...getMockData(type),
        mock: true,
      };
    }
    if (labels.length > 10) {
      labels = labels.slice(0, 10);
      values = values.slice(0, 10);
    }
  }
  return {
    labels,
    values,
    mock: false,
  };
};

const getMockData = (
  type: 'category' | 'tags' | 'projects'
): { labels: string[]; values: number[] } => {
  switch (type) {
    default:
    case 'category':
      return {
        labels: categoriesLabelsMockData,
        values: categoriesValuesMockData,
      };
    case 'tags':
      return {
        labels: tagsLabelsMockData,
        values: tagsValuesMockData,
      };
    case 'projects':
      return {
        labels: projectsLabelsMockData,
        values: projectsValuesMockData,
      };
  }
};
