import {createSlice} from "@reduxjs/toolkit";

export const basketSlise = createSlice({
  name: `basket`,
  initialState: {
    baskets: [],
    totalCount: 0
  },
  reducers: {
    addBasket: (state, action) => {
      state.baskets.push(action.payload);
    },
    removeBasket: (state, action) => {
      state.baskets = action.payload;
    },
    updateBasket: (state, action) => {
      state.baskets = state.baskets.map((n) => n.article === action.payload.article ? action.payload : n);
    },
    addTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
  },
});

export const {addBasket, removeBasket, updateBasket, addTotalCount} = basketSlise.actions;
export const Baskets = (state) => state.basket.baskets;
export const basketTotal = (state) => state.basket.totalCount;

export default basketSlise.reducer;
