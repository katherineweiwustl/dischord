// action creator is just a function that dispatches an action

export const changeUsername = (username) => {
    return (dispatch) => {
        dispatch({
            type: "changeUsername",
            payload: username
        })
    }
}
export const changePassword = (password) => {
    return (dispatch) => {
        dispatch({
            type: "changePassword",
            payload: password
        })
    }
}

export default {
    changeUsername,
    changePassword
}

// create a central index.js file

// bind provides the dispatch function to the action creators (it's a shortcut!)