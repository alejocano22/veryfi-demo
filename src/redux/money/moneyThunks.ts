import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { responseToMoneyModel } from './moneyMapper';

export const loadMoneyIn = createAsyncThunk(
  'moneyIn/load',
  async ({
    session,
    startDate,
    endDate,
  }: {
    session: string;
    startDate: string;
    endDate: string;
  }) => {
    const response = await axios.post(
      `${process.env.NEXTAUTH_URL}/api/money/in`,
      {
        session,
        startDate,
        endDate,
      }
    );
    return responseToMoneyModel(response.data.chart);
  }
);

export const loadMoneyOut = createAsyncThunk(
  'moneyOut/load',
  async ({
    session,
    startDate,
    endDate,
  }: {
    session: string;
    startDate: string;
    endDate: string;
  }) => {
    const response = await axios.post(
      `${process.env.NEXTAUTH_URL}/api/money/out`,
      {
        session,
        startDate,
        endDate,
      }
    );
    return responseToMoneyModel(response.data.chart);
  }
);
