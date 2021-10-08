import {configureStore} from "@reduxjs/toolkit";
import guitarsSlise from "./giutarsSlise";
import objectSlise from "./objectSlise";
import modalSlise from "./modalSlise";
import paginationSlise from "./paginationSlise";

export default configureStore({
  reducer: {
    guitars: guitarsSlise,
    object: objectSlise,
    modal: modalSlise,
    pagination: paginationSlise,
  },
});
