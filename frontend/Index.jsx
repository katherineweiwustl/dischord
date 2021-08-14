import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx"
import configureStore from "./state/store"

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = window.currentUser
  const root = document.getElementById("root")
  let store

  // get the current user, store it into the state, and then delete it
  if(currentUser) {
    const preloadedState = {
      session: {
        currentUser: currentUser
        // same as just currentUser without the key/value pair (only works if
          // key is the same as the variable)
      }
    }
    store = configureStore(preloadedState)
    // configures store with preloaded states (based on the currently
      // logged in user)
      // window.currentUser contains username and current ID
    delete window.currentUser
  }
  else {
    const preloadedState = {
      session: {
        currentUser: null
      }
    }
    store = configureStore(preloadedState)
  }

  ReactDOM.render(
  <Provider store={store}>
    <App store={store}/> 
  </Provider>
  ,
  root);
});
// everything wrapped in the provider will have access to the store created
  // in store/store.jsx
