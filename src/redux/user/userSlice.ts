import { createSlice, Slice } from '@reduxjs/toolkit';
import { userSliceI } from './userInterface';

const initialState: userSliceI = {
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
      state.session = action.payload.value.session;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
