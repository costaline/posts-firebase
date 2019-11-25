import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Cookie from "js-cookie";
import jwt_decode from "jwt-decode";

import App from "./app";
import store from "~store";
import { authActions } from "~store/actions";

const jwt = Cookie.get("jwt");

if (jwt) {
  const decoded = jwt_decode(jwt);

  store.dispatch(authActions.setUser(decoded));

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(authActions.logoutUser());

    window.location.href = "/auth";
  }
}

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const path = document.getElementById("root");

ReactDOM.render(app, path);
