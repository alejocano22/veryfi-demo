import { createSlice, Slice } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';
import { userI } from '@redux/user/types';

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
});

export const { addUser } = userSlice.actions;

export const selectSession = (state: RootState) => state.userSlice.session;
export const selectUser = (state: RootState) => state.userSlice;

export default userSlice.reducer;
