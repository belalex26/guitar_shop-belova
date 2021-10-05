import {createSlice} from "@reduxjs/toolkit";

export const basketSlise = createSlice({
  name: `basket`,
  initialState: {
    value: {}
  },
  reducers: {
    increment: (state, data) => {
      let article = data.payload;
      if (state.value[article] === undefined) {
        state.value[article] = 0;
      }
      state.value[article]++;
    },
    decrement: (state, data) => {
      let article = data.payload;
      if (state.value[article] > 0) {
        state.value[article]--;
      }
      if (state.value[article] === undefined) {
        state.value[article] = 0;
      }
    }
  },
});

export const {increment, decrement} = basketSlise.actions;
export const selectBasket = (state) => state.basket.value;
export default basketSlise.reducer;
