import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { responseToCategoriesModel } from '@redux/categories/mappers';

export const loadCategories = createAsyncThunk(
  'categories/load',
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
      `${process.env.NEXTAUTH_URL}/api/categories`,
      {
        session,
        startDate,
        endDate,
      }
    );
    return responseToCategoriesModel(response.data.categories);
  }
);
