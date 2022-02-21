import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { responseToTagsModel } from '@redux/tags/mappers';

export const loadTags = createAsyncThunk(
  'tags/load',
  async ({
    session,
    startDate,
    endDate,
  }: {
    session: string;
    startDate: string;
    endDate: string;
  }) => {
    const response = await axios.post(`${process.env.NEXTAUTH_URL}/api/tags`, {
      session,
      startDate,
      endDate,
    });
    return responseToTagsModel(response.data.tags);
  }
);
