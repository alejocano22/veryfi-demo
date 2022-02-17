import { Scatter, Bar, Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { triggerAsyncId } from 'async_hooks';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export interface BarLineChartProps {
  labels: string[];
  valuesBarOne: number[];
  labelBarOne?: string;

  valuesBarTwo: number[];
  labelBarTwo: string;

  labelLine?: string;
  valuesLine?: number[];

  mock?: boolean;
}

export const BarLineChart = ({
  labels,
  labelBarOne,
  valuesBarOne,
  labelBarTwo,
  valuesBarTwo,
  labelLine,
  valuesLine,
}: BarLineChartProps) => {
  return (
    <Chart
      type='bar'
      data={{
        labels: labels,
        datasets: [
          {
            type: 'line',
            label: labelLine,
            data: valuesLine,
            tension: 0.3,
            borderColor: 'rgb(30,144,255)',
          },
          {
            type: 'bar',
            label: labelBarOne,
            data: valuesBarOne,
            borderColor: 'rgb(50,205,50)',
            backgroundColor: 'rgb(50,205,50, 0.7)',
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: labelBarTwo,
            data: valuesBarTwo?.map((value) => value * -1),
            borderColor: 'rgb(255,0,0)',
            backgroundColor: 'rgb(255,0,0,0.7)',
            borderWidth: 2,
          },
        ],
      }}
      width={400}
      height={200}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      }}
    />
  );
};

export default BarLineChart;