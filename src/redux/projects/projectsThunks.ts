import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { responseToProjectsModel } from '@redux/projects/mappers';

export const loadProjects = createAsyncThunk(
  'projects/load',
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
      `${process.env.NEXTAUTH_URL}/api/projects`,
      {
        session,
        startDate,
        endDate,
      }
    );
    return responseToProjectsModel(response.data.projects);
  }
);
