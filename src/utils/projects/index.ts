import { BarChartProps } from 'src/components/elements/chart/BarChart';
import { projectI } from 'src/redux/projects/projectsInterfaces';

export const handleProjectsChartData = (
  projects: projectI[]
): BarChartProps => {
  let labels: string[] = [];
  let values: number[] = [];

  if (projects) {
    projects
      .filter((category) => category.spent > 0)
      .map((c) => {
        labels.push(c.name);
        values.push(c.spent);
      });
    if (labels.length === 0) {
      return {
        labels: projectLabelsMockData,
        values: projectValuesMockData,
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

const projectLabelsMockData = [
  'NY Project',
  'London Project',
  'Medellin Project',
];

const projectValuesMockData = [1000, 1600, 1450];
