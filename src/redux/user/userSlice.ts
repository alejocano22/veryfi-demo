import { createSlice, Slice } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';
import { userI } from '@redux/user/types';
import { loadUserSession } from './userThunks';

const initialState: userI = {
  error: null,
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  companyName: null,
  session: null,
  type: null,
};

export const userSlice: Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      return (state = action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUserSession.fulfilled, (state, action) => {
      state.session = action.payload;
    });
  },
});

export const { addUser } = userSlice.actions;

export const selectSession = (state: RootState) => state.userSlice.session;
export const selectUser = (state: RootState) => state.userSlice;

export default userSlice.reducer;
