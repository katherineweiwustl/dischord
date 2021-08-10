// combine all the reducers in the index.jsx file

import { combineReducers } from "redux"
import userReducer from "./userReducer"
import uiReducer from './ui_reducer'

const reducers = combineReducers({
    // takes in an object of all of the reducers combined
    // key value pairs
    user: userReducer,
    ui: uiReducer
})
export default reducers

// last step is to create store