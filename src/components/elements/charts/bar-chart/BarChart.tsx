import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface BarChartProps {
  labels: string[];
  values: number[];
  mock?: boolean;
  label?: string;
}

export const BarChart = ({ labels, values, label }: BarChartProps) => {
  const barData = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: values,
        backgroundColor: [
          '#003F5C',
          '#2F4b7C',
          '#665191',
          '#A05195',
          '#D45087',
          '#F95D6A',
          '#FF7C43',
          '#FFA600',
          '#D48A00',
          '#A96E00',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Bar
      data={barData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            ticks: {
              callback: (value) => {
                return '$' + value;
              },
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.dataset.label}: $${context.parsed.y}` || '';
              },
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
