import { tagI } from './../../redux/tags/tagsInterfaces';
import { BarChartProps } from 'src/components/elements/chart/BarChart';

export const handleTagsChartData = (tags: tagI[]): BarChartProps => {
  let labels: string[] = [];
  let values: number[] = [];

  if (tags) {
    tags
      .filter((category) => category.spent > 0)
      .map((c) => {
        labels.push(c.name);
        values.push(c.spent);
      });
    if (labels.length === 0) {
      return {
        labels: tagsLabelsMockData,
        values: tagsValuesMockData,
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

const tagsLabelsMockData = ['#Food', '#Books', '#Travel'];

const tagsValuesMockData = [400, 600, 450];
