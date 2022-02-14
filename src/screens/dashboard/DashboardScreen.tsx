import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '@redux/user/slice';
import { loadCategories } from 'src/redux/categories/categoriesThunks';
import { selectSession } from 'src/redux/user/userSelectors';
import { useAppSelector } from '@redux-hooks';
import Navbar from 'src/components/elements/navbar/Navbar';
import BarChart, {
  BarChartProps,
} from 'src/components/elements/chart/BarChart';
import { userI } from 'src/redux/user/userInterfaces';
import { selectCategories } from 'src/redux/categories/categoriesSelectors';
import { handleCategoriesChartData } from 'src/utils/categories';
import { loadTags } from 'src/redux/tags/tagsThunks';
import { selectTags } from 'src/redux/tags/tagsSelectors';
import { handleTagsChartData } from 'src/utils/tags';

export interface DashboardScreenProps {
  user: userI;
}

export default function DashboardScree({ user }: DashboardScreenProps) {
  const dispatch = useDispatch();
  const session = useAppSelector(selectSession);
  const categories = handleCategoriesChartData(
    useAppSelector(selectCategories)
  );

  const tags = handleTagsChartData(useAppSelector(selectTags));

  const [chart, setChart] = useState(0);

  useEffect(() => {
    console.log('in useEffect');
    dispatch(addUser({ value: { ...user } }));
    if (session) {
      fetch();
    }
  }, [session]);

  const fetch = () => {
    dispatch(
      loadCategories({
        session,
        startDate: '2000-01-01',
        endDate: '2022-02-14',
      })
    );
    dispatch(
      loadTags({
        session,
        startDate: '2000-01-01',
        endDate: '2022-02-14',
      })
    );
  };

  const chartSwitch = (chart: number) => {
    switch (chart) {
      default:
      case 0:
        return (
          <div className='border-2 rounded-b-md rounded-tr-md border-gray-lighter bg-gray-lighter'>
            <h1 className='text-xl text-center text-purple-dark my-4'>
              {'Categories'}
            </h1>
            <div className='h-96 p-4 rounded-md'>
              <BarChart
                labels={categories?.labels}
                values={categories?.values}
                label={'Spent'}
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className='border-2 rounded-b-md rounded-tr-md border-gray-lighter bg-gray-lighter'>
            <h1 className='text-xl text-center text-purple-dark my-4'>
              {'Tags'}
            </h1>
            <div className='h-96 p-4 rounded-md'>
              <BarChart
                labels={tags?.labels}
                values={tags?.values}
                label={'Spent'}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className='flex flex-col w-full border-2 rounded-b-md rounded-tr-md border-gray-lighter bg-gray-lighter'>
            <h1 className='text-xl text-center text-purple-dark my-4'>
              {'Projects'}
            </h1>
            <div className='h-96 p-4 rounded-md'>
              <BarChart
                labels={categories?.labels}
                values={categories?.values}
                label={'Spent'}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className='min-h-full'>
        <Navbar />
        <header className='bg-white shadow mt-20'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold text-purple-dark'>
              Veryfi Dashboard
            </h1>
          </div>
        </header>
        <main className=' flex items-center justify-center'>
          <div className='flex flex-col gap-10 mx-10 justify-center items-end lg:flex-row max-w-7xl py-6 sm:px-6'>
            <div className='flex flex-col justify-center items-center'>
              <div className='w-full flex items-start gap-1'>
                <button
                  className={`border-2 border-b-0 rounded-t-md border-gray-lighter  cursor-pointer p-2 ${
                    chart === 0 ? 'bg-gray-lighter' : 'bg-white'
                  }`}
                  onClick={() => setChart(0)}
                >
                  {'Categories'}
                </button>
                <button
                  className={`border-2 border-b-0 rounded-t-md border-gray-lighter  cursor-pointer p-2 ${
                    chart === 1 ? 'bg-gray-lighter' : 'bg-white'
                  }`}
                  onClick={() => setChart(1)}
                >
                  {'Tags'}
                </button>
                <button
                  className={`border-2 border-b-0 rounded-t-md border-gray-lighter  cursor-pointer p-2 ${
                    chart === 2 ? 'bg-gray-lighter' : 'bg-white'
                  }`}
                  onClick={() => setChart(2)}
                >
                  {'Projects'}
                </button>
              </div>
              {chartSwitch(chart)}
              {categories.mock ? (
                <h4 className='text-gray-light'>{`Pssst... you don't have enough data to render the Top 10 Projects chart. We added some sample data so you can see how it'd look.`}</h4>
              ) : (
                ''
              )}
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex flex-col w-full h-full border-2 rounded-b-md rounded-tr-md border-gray-lighter bg-gray-lighter'>
                <h1 className='text-xl text-center text-purple-dark my-4'>
                  {'Categories'}
                </h1>
                <div className='flex-grow h-96 p-4 rounded-md'>
                  <BarChart
                    labels={categories?.labels}
                    values={categories?.values}
                    label={'Spent'}
                  />
                </div>
              </div>
              {categories.mock ? (
                <h4 className='text-gray-light'>{`Pssst... you don't have enough data to render the Top 10 Projects chart. We added some sample data so you can see how it'd look.`}</h4>
              ) : (
                ''
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
