import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import thunk from "redux-thunk";

import guitarsSlise from "./giutarsSlise";
import objectSlise from "./objectSlise";
import paginationSlise from "./paginationSlise";
import filtersSliseType from "./filtersSliseType";
import filtersSliseStringsCheck from "./filtersStringsCheck";
import filtersSliseStringsDisable from "./filtersStringsDisable";
import basketSlise from "./basketSlise";
import filtersSlise from "./filterSlise";

const reducers = combineReducers({
  guitars: guitarsSlise,
  object: objectSlise,
  basket: basketSlise,
  pagination: paginationSlise,
  filterType: filtersSliseType,
  filterStrings: filtersSliseStringsCheck,
  filterStringsDisable: filtersSliseStringsDisable,
  filter: filtersSlise,
});

const persistConfig = {
  key: `root`,
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== `production`,
  middleware: [thunk],
});
export default store;
