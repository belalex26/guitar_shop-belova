import {createSlice} from "@reduxjs/toolkit";

export const modalSlise = createSlice({
  name: `modal`,
  initialState: {
    isOpenedAdd: false,
    isOpenedSuccess: false,
    isOpenedRemove: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpenedAdd = true;
    },
    closeModal: (state) => {
      state.isOpenedAdd = false;
    },
    openModalSuccess: (state) => {
      state.isOpenedSuccess = true;
    },
    closeModalSuccess: (state) => {
      state.isOpenedSuccess = false;
    },
    openModalRemove: (state) => {
      state.isOpenedRemove = true;
    },
    closeModalRemove: (state) => {
      state.isOpenedRemove = false;
    },
  },
});

export const {openModal, closeModal, openModalSuccess, closeModalSuccess, openModalRemove, closeModalRemove} = modalSlise.actions;
export const selectModalAdd = (state) => state.modal.isOpenedAdd;
export const selectModalSuccess = (state) => state.modal.isOpenedSuccess;
export const selectModalRemove = (state) => state.modal.isOpenedRemove;
export default modalSlise.reducer;
