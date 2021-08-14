const reducer = (state = {}, action) => {
    // function that returns a state
    // read the action and return the appropriate state
    switch (action.type) {
        case "LOGIN_USERNAME":
            return { ...state, username: action.payload};
        case "LOGIN_PASSWORD":
            return { ...state, password: action.payload};
        default: 
            return state;
    }
}

export default reducer;

// you can have multiple reducers, but you have to
    // combine multiple reducers to put them in the store

// switch statements are just if elses (just switch and cases; same as: else if else if else if...)
