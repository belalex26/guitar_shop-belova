import {createSlice} from "@reduxjs/toolkit";

export const filtersSliseType = createSlice({
  name: `filterType`,
  initialState: {
    acoustic: false,
    electro: true,
    uculele: true
  },
  reducers: {
    selectCheckboxesaAcoustic: (state, action) => {
      state.acoustic = action.payload;
    },

    selectCheckboxesElectro: (state, action) => {
      state.electro = action.payload;
    },

    selectCheckboxesUculele: (state, action) => {
      state.uculele = action.payload;
    },

  },
});

export const {selectCheckboxesaAcoustic, selectCheckboxesElectro, selectCheckboxesUculele} = filtersSliseType.actions;
export const selectAcoustic = (state) => state.filterType.acoustic;
export const selectElectro = (state) => state.filterType.electro;
export const selectUculele = (state) => state.filterType.uculele;
export default filtersSliseType.reducer;
