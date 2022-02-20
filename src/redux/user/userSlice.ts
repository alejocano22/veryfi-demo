import { createSlice, Slice } from '@reduxjs/toolkit';
import { userI } from './userInterfaces';

const initialState: userI = {
  error: null,
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  username: null,
  companyName: null,
  created: null,
  session: null,
  status: null,
  type: null,
};

export const userSlice: Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      return { ...state, ...action.payload.value };
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
