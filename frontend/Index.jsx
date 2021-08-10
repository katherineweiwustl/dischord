import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx"
import configureStore from "./state/store"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore()

  ReactDOM.render(
  <Provider store={ store }>
    <App/> 
  </Provider>
  , 
  root);
});
// everything wrapped in the provider will have access to the store created
  // in store/store.jsx
