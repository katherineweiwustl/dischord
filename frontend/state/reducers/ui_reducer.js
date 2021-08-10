
const reducer = (state = { modalOpen: false, modalType: null }, action) => {
    switch (action.type) {
        case "OPEN_MODAL":
            return { ...state, modalOpen: true, modalType: action.payload };
        case "CLOSE_MODAL":
            return { ...state, modalOpen: false};
        default: 
            return state;
    }
}

export default reducer;
