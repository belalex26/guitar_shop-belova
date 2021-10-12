import {createSlice} from "@reduxjs/toolkit";

export const filtersSliseStringsCheck = createSlice({
  name: `filterStrings`,
  initialState: {
    str4: true,
    str6: true,
    str7: false,
    str12: false,
  },
  reducers: {
    select4Checkbox: (state, action) => {
      state.str4 = action.payload;
    },
    select6Checkbox: (state, action) => {
      state.str6 = action.payload;
    },
    select7Checkbox: (state, action) => {
      state.str7 = action.payload;
    },
    select12Checkbox: (state, action) => {
      state.str12 = action.payload;
    },
  },
});

export const {select4Checkbox, select6Checkbox, select7Checkbox, select12Checkbox} = filtersSliseStringsCheck.actions;

export const selectStringsCheck4 = (state) => state.filterStrings.str4;
export const selectStringsCheck6 = (state) => state.filterStrings.str6;
export const selectStringsCheck7 = (state) => state.filterStrings.str7;
export const selectStringsCheck12 = (state) => state.filterStrings.str12;
export default filtersSliseStringsCheck.reducer;


