/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    prevPage: null,
    currentPage: 1,
    nextPage: null
  },
  reducers: {
    setPrevPage: (state, action) => {
      state.prevPage = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setNextPage: (state, action) => {
      state.nextPage = action.payload;
    }
  }
});

export const { setPrevPage, setCurrentPage, setNextPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
