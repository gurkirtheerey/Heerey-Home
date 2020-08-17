import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// redux set up
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
