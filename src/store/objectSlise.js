import {createSlice} from "@reduxjs/toolkit";

export const objectSlise = createSlice({
  name: `object`,
  initialState: {
    value: {},
    count: 1
  },
  reducers: {
    dataObject: (state, action) => {
      state.value = {...action.payload};
    },

    countObject: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const {dataObject, countObject} = objectSlise.actions;
export const selectObject = (state) => state.object.value;
export const selectCount = (state) => state.object.count;
export default objectSlise.reducer;
