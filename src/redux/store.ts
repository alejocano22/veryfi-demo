import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { createWrapper } from 'next-redux-wrapper';
import categoriesSlice from './categories/categoriesSlice';
import moneySlice from './money/moneySlice';
import projectsSlice from './projects/projectsSlice';
import tagsSlice from './tags/tagsSlice';
import userSlice from './user/userSlice';

const store = configureStore({
  reducer: {
    userSlice: userSlice,
    categoriesSlice: categoriesSlice,
    tagsSlice: tagsSlice,
    projectsSlice: projectsSlice,
    moneySlice: moneySlice,
  },
});
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const makeStore = () => store;
export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
