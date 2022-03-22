import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadUserSession = createAsyncThunk(
  'user/loadSession',
    async ({
      session
  }: {
    session: string
  }) => {
    // const response = await axios.post(
    //   `${process.env.NEXTAUTH_URL}/api/money/in`,
    //   {
    //     session,
    //     startDate,
    //     endDate,
    //   }
    // );
    // return responseToMoneyModel(response.data.chart);
      return session;
  }
);

