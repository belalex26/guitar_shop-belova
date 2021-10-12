import {createSlice} from "@reduxjs/toolkit";
import guitarsData from "../data/mockGuitars.js";

export const filtersSlise = createSlice({
  name: `filter`,
  initialState: {
    directionSort: ``,
    sortType: ``,
    filter: guitarsData
  },
  reducers: {
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },

    changeSortDirection: (state, action) => {
      state.directionSort = action.payload;
    },

    changeFilter: (state, action) => {
      state.filter = [...action.payload];
    },
  },
});

export const {changeFilter, changeSortType, changeSortDirection} = filtersSlise.actions;
export const selectFilter = (state) => state.filter.filter;
export const selectSortType = (state) => state.filter.sortType;
export const selectSortDirection = (state) => state.filter.directionSort;
export default filtersSlise.reducer;
