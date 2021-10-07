import {createSlice} from "@reduxjs/toolkit";


export const modalSlise = createSlice({
  name: `modal`,
  initialState: {
    isOpened: true,
  },
  reducers: {
    openModal: (state) => {
      state.isOpened = true;
    },
    closeModal: (state) => {
      state.isOpened = false;
    },

  },
});

export const {openModal, closeModal} = modalSlise.actions;
export const selectModal = (state) => state.modal.isOpened;
export default modalSlise.reducer;
