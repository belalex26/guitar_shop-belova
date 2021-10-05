import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./scss/index.scss";

import App from "./components/app/app";
import store from "./store";


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>

    </React.StrictMode>,
    document.getElementById(`root`)
);

