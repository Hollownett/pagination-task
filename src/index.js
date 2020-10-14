import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import  GlobalStyles from "./globalStyles"
import App from "./App/App";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyles/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

