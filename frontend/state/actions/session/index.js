// action creator is just a function that dispatches an action

import { NormalModuleReplacementPlugin } from "webpack"

export const loginUsername = (username) => {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_USERNAME",
            payload: username
        })
    }
}
export const loginPassword = (password) => {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_PASSWORD",
            payload: password
        })
    }
}

export const signOut = () => {
    return (dispatch) => {
        dispatch( {
            type: "SIGN_OUT",
            payload: null
        })
    }
}
export default {
    loginUsername,
    loginPassword,
    signOut
}

// create a central index.js file

// bind provides the dispatch function to the action creators (it's a shortcut!)