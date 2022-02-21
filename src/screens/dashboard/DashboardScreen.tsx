import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, useWatch } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useAppSelector } from '@redux/hooks';
import { i18nCommon, i18nDashboard } from '@i18n';
import { addUser, selectSession } from '@redux/user/slice';
import { userI } from '@redux/user/types';
import { loadCategories } from '@redux/categories/thunks';
import { selectCategories } from '@redux/categories/slice';
import { loadTags } from '@redux/tags/thunks';
import { selectTags } from '@redux/tags/slice';
import { loadProjects } from '@redux/projects/thunks';
import { selectProjects } from '@redux/projects/slice';
import { loadMoneyIn, loadMoneyOut, loadQuarter } from '@redux/money/thunks';
import {
  selectQuarterCategories,
  selectQuarterMonths,
  selectMoneyIn,
  selectMoneyOut,
} from '@redux/money/slice';
import { Navbar, Sidebar } from '@navbars';
import { BarChart, BarLineChart } from '@charts';
import { QuarterTable } from '@tables';
import { getLastQuarter } from '@components/utils';
import { createDate } from '@components/utils';
import { getNetAmount } from '@components/utils';
import { toBarChartData } from '@components/utils';
import { Button } from '@inputs';
import { Paragraph, Title } from '@texts';

export interface DashboardScreenProps {
  user: userI;
}

export default function DashboardScree({ user }: DashboardScreenProps) {
  const dispatch = useDispatch();
  const [chart, setChart] = useState(0);
  const { push: routerPush, locale } = useRouter();
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
  const today = new Date().toISOString().split('T')[0];
  const defaultEndDate = createDate(0, 0, -1).toISOString().split('T')[0];
  const quarterTimes = getLastQuarter();

  const {
    categoriesTitle,
    tagsTitle,
    projectsTitle,
    mockMessage,
    moneyTitle,
    quarterTitle,
    budgetLabel,
    spentLabel,
    balanceLabel,
    startDateLabel,
    endDateLabel,
    moneyInLabel,
    moneyOutLabel,
    moneyNetLabel,
  } = i18nDashboard[locale];
  const { months } = i18nCommon[locale];
  const tabsTitles = [categoriesTitle, tagsTitle, projectsTitle];

  const { register, control, getValues } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      startDate: defaultEndDate,
      endDate: today,
    },
  });
  const watch = useWatch({ control });
  const startDate = watch.startDate;
  const endDate = watch.endDate;

  useEffect(() => {
    dispatch(addUser({ ...user }));
    if (session) {
      fetch();
    } else {
      routerPush('/dashboard');
    }
  }, [session, watch]);

  const fetch = () => {
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
      })
    );
  };

  const chartSwitch = (chart: number) => {
    switch (chart) {
      default:
      case 0:
        return (
          <BarChart
            labels={categories?.labels}
            values={categories?.values}
            label={spentLabel}
          />
        );

      case 1:
        return (
          <BarChart
            labels={tags?.labels}
            values={tags?.values}
            label={spentLabel}
          />
        );

      case 2:
        return (
          <BarChart
            labels={projects?.labels}
            values={projects?.values}
            label={spentLabel}
          />
        );
    }
  };

  return (
    <>
      <Navbar />
      <div className='lg:h-auto flex'>
        <Sidebar />
        <div className='flex-1 bg-gray-lighter'>
          <header className='bg-gray-lighter shadow mt-20'>
            <div className='flex items-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-7'>
              <form className='flex gap-1 items-center  '>
                <label>{startDateLabel}</label>
                <input
                  className='border-2 rounded-md border-gray-light p-1 mr-5'
                  id={'startDate'}
                  name={'startDate'}
                  type='date'
                  min={defaultEndDate}
                  max={getValues('endDate')}
                  {...register('startDate')}
                />

                <label>{endDateLabel}</label>
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
          <main className='h-auto lg:h-auto flex items-center justify-center flex-col bg-gray-lighter'>
            <div className='w-10/12 flex flex-col xl:flex-row gap-10 mx-10 justify-center items-end drop-shadow-lg'>
              <div className='w-full h-auto flex flex-col justify-center items-center drop-shadow-lg'>
                <div className='w-full flex gap-2'>
                  {tabsTitles.map((tab, index) => (
                    <Button
                      key={`tab-${index}`}
                      id={`tab-${index}`}
                      text={tab}
                      textColor={chart === index ? 'text-purple-dark' : ''}
                      backgroundColor={
                        chart === index
                          ? 'bg-white border-white'
                          : 'bg-gray-light border-gray-light'
                      }
                      additionalCss='border border-b-0 rounded-t-md border-gray-lighter  cursor-pointer p-2'
                      onClick={() => setChart(index)}
                    />
                  ))}
                </div>
                <div className='w-full h-72 p-4 rounded-b-md rounded-tr-md border-white bg-white'>
                  {chartSwitch(chart)}
                </div>
                {categories.mock ? (
                  <Paragraph
                    text={mockMessage}
                    color='text-purple'
                    additionalCss='mt-2'
                  />
                ) : (
                  ''
                )}
              </div>
              <div className='w-full flex flex-col justify-center items-center drop-shadow-lg'>
                <div className='w-full flex flex-col justify-center items-center drop-shadow-lg bg-white rounded-md border-white'>
                  <Title
                    text={moneyTitle}
                    variant='h3'
                    color='text-purple-dark'
                    additionalCss='my-2'
                  />
                  <div className='w-full h-72 p-4 '>
                    <BarLineChart
                      labels={moneyIn?.labels}
                      labelBarOne={moneyInLabel}
                      valuesBarOne={moneyIn?.totals}
                      labelBarTwo={moneyOutLabel}
                      valuesBarTwo={moneyOut?.totals}
                      labelLine={moneyNetLabel}
                      valuesLine={getNetAmount(
                        moneyIn?.totals,
                        moneyOut?.totals
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='relative flex flex-col items-center w-10/12 h-96 m-10 drop-shadow-lg rounded-md bg-white border-white'>
              <Title
                text={quarterTitle}
                variant='h3'
                color='text-purple-dark'
                additionalCss='w-full text-center mt-4'
              />
              <div className='absolute mt-14 w-10/12 h-80 overflow-scroll flex flex-col items-center'>
                {lastQuarterCategories ? (
                  <QuarterTable
                    lastQuarter={lastQuarterCategories}
                    months={lastQuarterMonths.map(
                      (month) =>
                        `${months[month]} ${quarterTimes.endDate.split('-')[0]}`
                    )}
                    budgetLabel={budgetLabel}
                    spentLabel={spentLabel}
                    balanceLabel={balanceLabel}
                    categoryLabel={categoriesTitle}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
