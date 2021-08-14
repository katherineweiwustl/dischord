// combine all the reducers in the index.jsx file

import { combineReducers } from "redux"
import sessionReducer from "./sessionReducer"
import uiReducer from './ui_reducer'

const reducers = combineReducers({
    // takes in an object of all of the reducers combined
    // key value pairs
    session: sessionReducer,
    ui: uiReducer
})
export default reducers

// last step is to create store