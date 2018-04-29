import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/app/";
import configureStore from "./store/configureStore";
import { restoreSession } from "./actions";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const store = configureStore();
// Restore user details on app start
store.dispatch(restoreSession());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

registerServiceWorker();
