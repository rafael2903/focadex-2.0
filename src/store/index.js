import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from '@reduxjs/toolkit';

import localStorage from './middlewares/localStorage';
import pagination from './pagination';
import user from './user';

const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ pagination, user });
const store = configureStore({ reducer, middleware });

export default store;
