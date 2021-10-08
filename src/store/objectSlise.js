import {createSlice} from "@reduxjs/toolkit";

export const objectSlise = createSlice({
  name: `object`,
  initialState: {
    value: {}
  },
  reducers: {
    dataObject: (state, data) => {
      state.value = {};
      let article = data.payload;
      if (state.value[article] === undefined) {
        state.value[article] = 0;
      }
      state.value[article]++;
    },
  },
});

export const {dataObject} = objectSlise.actions;
export const selectObject = (state) => state.object.value;
export default objectSlise.reducer;
