import { RootState } from '../store';

export const selectSession = (state: RootState) => state.userSlice.session;

export const selectUser = (state: RootState) => state.userSlice;
