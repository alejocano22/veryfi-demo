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
        backgroundColor: ['#292043'],
        borderColor: ['#292043'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Bar
      data={barData}
      width={400}
      height={200}
      options={{
        maintainAspectRatio: false,
      }}
    />
  );
};

export default BarChart;
