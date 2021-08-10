import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers/root_reducer"
import thunk from 'redux-thunk'
import logger from 'redux-logger'



const configureStore = (preloadedState = {}) => {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
  }


export default configureStore

// hook this store to the react application
// provider will provide everything in store to the app
// wrap <App /> with a provider that contains the store we just created

