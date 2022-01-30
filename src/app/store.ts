import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});

// https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
