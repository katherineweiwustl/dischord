export const LOGIN = 'LOGIN'
export const LOG_OUT = 'LOG_OUT'

const reducer = (state = {}, action) => {
    // function that returns a state
    // read the action and return the appropriate state
    switch (action.type) {
        case LOGIN:
            return { ...state, currentUser: action.payload};
            break
        case LOG_OUT:
            return {...state, currentUser: null }
            break
        default: 
            return state
    }
}

export default reducer;

// you can have multiple reducers, but you have to
    // combine multiple reducers to put them in the store

// switch statements are just if elses (just switch and cases; same as: else if else if else if...)
