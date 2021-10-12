import {createSlice} from "@reduxjs/toolkit";

export const basketSlise = createSlice({
  name: `basket`,
  initialState: {
    baskets: [],
  },
  reducers: {
    addBasket: (state, action) => {
      state.baskets.push(action.payload);
    },
    removeBasket: (state, action) => {
      state.baskets = action.payload;
    },
  },
});

export const {addBasket, removeBasket, discont} = basketSlise.actions;
export const Baskets = (state) => state.basket.baskets;
export default basketSlise.reducer;
