// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice'; // Your data slice file

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
