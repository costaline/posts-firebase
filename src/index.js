import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const path = document.getElementById("root");

ReactDOM.render(app, path);
