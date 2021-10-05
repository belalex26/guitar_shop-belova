import {configureStore} from "@reduxjs/toolkit";
import guitarsSlise from "./giutarsSlise";
import basketSlise from "./basketSlise";
import modalSlise from "./modalSlise";

export default configureStore({
  reducer: {
    guitars: guitarsSlise,
    basket: basketSlise,
    modal: modalSlise,
  },
});
