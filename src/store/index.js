import { configureStore } from '@reduxjs/toolkit';

import pagination from './pagination';

const store = configureStore({
  reducer: pagination
});

export default store;
