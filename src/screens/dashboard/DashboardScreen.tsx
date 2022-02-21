import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, useWatch } from 'react-hook-form';
import { addUser } from '@redux/user/slice';
import { loadCategories } from 'src/redux/categories/categoriesThunks';
import { selectSession } from 'src/redux/user/userSlice';
import { useAppSelector } from '@redux/hooks';
import Navbar from 'src/components/elements/navbars/Navbar';
import BarChart from 'src/components/elements/charts/BarChart';
import { userI } from 'src/redux/user/user.types';
import { selectCategories } from 'src/redux/categories/categoriesSlice';
import { getLastQuarter } from '../../components/utils/quarter';
import { createDate } from '../../components/utils/dates';
import { loadTags } from 'src/redux/tags/tagsThunks';
import { selectTags } from '@redux/tags/slice';

import { selectProjects } from '@redux/projects/slice';
import { loadProjects } from 'src/redux/projects/projectsThunks';
import Sidebar from 'src/components/elements/navbars/SideBar';
import {
  loadMoneyIn,
  loadMoneyOut,
  loadQuarter,
} from 'src/redux/money/moneyThunks';
import BarLineChart from 'src/components/elements/charts/BarLineChart';
import {
  selectQuarterCategories,
  selectQuarterMonths,
  selectMoneyIn,
  selectMoneyOut,
} from 'src/redux/money/moneySlice';
import { getNetAmount } from 'src/utils/money';
import Table from 'src/components/elements/table/Table';
import { useRouter } from 'next/router';
import { i18nCommon } from 'src/i18n/common';
import { toBarChartData } from '../../components/utils/barChart';

export interface DashboardScreenProps {
  user: userI;
}

export default function DashboardScree({ user }: DashboardScreenProps) {
  const { push: routerPush, locale } = useRouter();
  const dispatch = useDispatch();
  const session = useAppSelector(selectSession);
  const categories = toBarChartData(
    useAppSelector(selectCategories),
    'category'
  );
  const tags = toBarChartData(useAppSelector(selectTags), 'tags');
  const projects = toBarChartData(useAppSelector(selectProjects), 'projects');

  const moneyIn = useAppSelector(selectMoneyIn);
  const moneyOut = useAppSelector(selectMoneyOut);
  const lastQuarterCategories = useAppSelector(selectQuarterCategories);
  const lastQuarterMonths = useAppSelector(selectQuarterMonths);

  const [chart, setChart] = useState(0);
  const [startDate, setStartDate] = useState('2000-01-01');
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  const today = new Date().toISOString().split('T')[0];
  const defaultEndDate = createDate(0, 0, -1).toISOString().split('T')[0];

  const { register, control, getValues } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      startDate: defaultEndDate,
      endDate: today,
    },
  });
  const watch = useWatch({ control });

  const { months } = i18nCommon[locale];

  useEffect(() => {
    dispatch(addUser({ ...user }));
    if (session) {
      fetch();
    } else {
      routerPush('/dashboard');
    }
  }, [session, watch]);

  const fetch = () => {
    const quarterTimes = getLastQuarter();
    const startDate = watch.startDate;
    const endDate = watch.endDate;
    dispatch(
      loadCategories({
        session,
        startDate,
        endDate,
      })
    );
    dispatch(
      loadTags({
        session,
        startDate,
        endDate,
      })
    );
    dispatch(
      loadProjects({
        session,
        startDate,
        endDate,
      })
    );
    dispatch(
      loadMoneyIn({
        session,
        startDate,
        endDate,
      })
    );
    dispatch(
      loadMoneyOut({
        session,
        startDate,
        endDate,
      })
    );
    dispatch(
      loadQuarter({
        session,
        startDate: quarterTimes.startDate,
        endDate: quarterTimes.endDate,
        months: months,
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
            <div className='h-72 p-4 rounded-md'>
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
            <div className='h-72 p-4 rounded-md'>
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
            <div className='h-72 p-4 rounded-md'>
              <BarChart
                labels={projects?.labels}
                values={projects?.values}
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

        <div className='flex'>
          <Sidebar />
          <div className='flex-1'>
            <header className='bg-white shadow mt-20'>
              <div className='flex items-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-7'>
                <h1 className='text-3xl font-bold text-purple-dark'>
                  Veryfi Dashboard
                </h1>
                <form className='flex gap-1 items-center'>
                  <label>{'Start date:'}</label>
                  <input
                    className='border-2 rounded-md border-gray-light p-1 mr-5'
                    id={'startDate'}
                    name={'startDate'}
                    type='date'
                    min={defaultEndDate}
                    max={getValues('endDate')}
                    {...register('startDate')}
                  />

                  <label>{'End date:'}</label>
                  <input
                    className='border-2 rounded-md border-gray-light p-1'
                    id={'endDate'}
                    name={'endDate'}
                    type='date'
                    min={getValues('startDate')}
                    max={today}
                    {...register('endDate')}
                  />
                </form>
              </div>
            </header>
            <main className='flex items-center justify-center flex-col mb-10'>
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
                  <div className='border-2 rounded-b-md rounded-tr-md border-gray-lighter bg-gray-lighter'>
                    <h1 className='text-xl text-center text-purple-dark my-4'>
                      {'Money In/Out'}
                    </h1>
                    <div className='h-72 p-4 rounded-md'>
                      {moneyIn && moneyOut ? (
                        <BarLineChart
                          labels={moneyIn?.labels}
                          labelBarOne={'Money In'}
                          valuesBarOne={moneyIn?.totals}
                          labelBarTwo={'Money Out'}
                          valuesBarTwo={moneyOut?.totals}
                          labelLine={'Net amount'}
                          valuesLine={getNetAmount(
                            moneyIn?.totals,
                            moneyOut?.totals
                          )}
                        />
                      ) : (
                        <h1>Loading...</h1>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center mx-10'>
                {lastQuarterCategories ? (
                  <Table
                    lastQuarter={lastQuarterCategories}
                    months={lastQuarterMonths}
                  />
                ) : (
                  ''
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
