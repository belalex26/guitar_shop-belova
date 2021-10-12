import {createSlice} from "@reduxjs/toolkit";

export const filtersSliseStringsDisable = createSlice({
  name: `filterStringsDisable`,
  initialState: {
    str4: false,
    str6: false,
    str7: false,
    str12: false,
  },
  reducers: {
    select4Disable: (state, action) => {
      state.str4 = action.payload;
    },
    select6Disable: (state, action) => {
      state.str6 = action.payload;
    },
    select7Disable: (state, action) => {
      state.str7 = action.payload;
    },
    select12Disable: (state, action) => {
      state.str12 = action.payload;
    },
  },
});

export const {select4Disable, select6Disable, select7Disable, select12Disable} = filtersSliseStringsDisable.actions;

export const selectStringsDisable4 = (state) => state.filterStringsDisable.str4;
export const selectStringsDisable6 = (state) => state.filterStringsDisable.str6;
export const selectStringsDisable7 = (state) => state.filterStringsDisable.str7;
export const selectStringsDisable12 = (state) => state.filterStringsDisable.str12;
export default filtersSliseStringsDisable.reducer;


