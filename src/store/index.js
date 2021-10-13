import {configureStore} from "@reduxjs/toolkit";

import guitarsSlise from "./giutarsSlise";
import objectSlise from "./objectSlise";
import paginationSlise from "./paginationSlise";
import filtersSliseType from "./filtersSliseType";
import filtersSliseStringsCheck from "./filtersStringsCheck";
import filtersSliseStringsDisable from "./filtersStringsDisable";
import basketSlise from "./basketSlise";
import filtersSlise from "./filterSlise";


export default configureStore({
  reducer: {
    guitars: guitarsSlise,
    object: objectSlise,
    basket: basketSlise,
    pagination: paginationSlise,
    filterType: filtersSliseType,
    filterStrings: filtersSliseStringsCheck,
    filterStringsDisable: filtersSliseStringsDisable,
    filter: filtersSlise,
  },
});
