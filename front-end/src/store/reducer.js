const initState = { token: '', userId: '', loginModalOpened: true, msgsList: [] };


const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'token':
            state = { ...state, token: action.val }
            break;
        case 'userId':
            state = { ...state, userId: action.val }
            break;
        case 'loginModalOpened':
            state = { ...state, loginModalOpened: action.val }
            break;
        case 'msgsList':
            state = { ...state, msgsList: action.val }
            break;
        default:
            return state;
    }
    return state;
};

export default reducer;
