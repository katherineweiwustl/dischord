// action creator is just a function that dispatches an action
import { closeModal } from '../ui/index'
import { LOGIN, LOG_OUT } from "../../reducers/sessionReducer"
import * as SessionApiUtil from '../../../utils/session_api_util'


const logoutActionCreator = () => {
    return {
        type: LOG_OUT
    }
}

const loginActionCreator = (frontendUserData) => { // here frontendUserData will be res.data, or username/id
    return {
        type: LOGIN,
        payload: frontendUserData
    }
}

export const login = (userData) => { // Here userData will be username/password
    return (dispatch) => {
        return SessionApiUtil.signIn(userData)
            .then((res) => dispatch(loginActionCreator(res.data)))
            .then(() => dispatch(closeModal()))
    }
}

export const logup = (userData) => { // Here userData will be username/password
    return (dispatch) => {
        return SessionApiUtil.signUp(userData)
            .then((res) => dispatch(loginActionCreator(res.data)))
            .then(() => dispatch(closeModal()))
    }
}


export const logout = () => {
    return (dispatch) => {
        SessionApiUtil.signOut()
            .then(() => dispatch(logoutActionCreator()))
    }
}

export default {
    login,
    logout,
    logup,
}

// create a central index.js file

// bind provides the dispatch function to the action creators (it's a shortcut!)