export const CREATE_SERVER = 'CREATE_SERVER'
export const GET_SERVERS = 'GET_SERVERS'


const reducer = (state = {}, action) => {
    // function that returns a state
    // read the action and return the appropriate state
    switch (action.type) {
        case CREATE_SERVER:
            return { ...state, serverData: action.payload };
            break
        case GET_SERVERS:
            return { ...state, serverData: action.payload };
            break
        default: 
            return state;
    }
}

export default reducer;

// you can have multiple reducers, but you have to
    // combine multiple reducers to put them in the store

// switch statements are just if elses (just switch and cases; same as: else if else if else if...)
