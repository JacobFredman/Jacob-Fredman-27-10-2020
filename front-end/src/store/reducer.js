// const { fromJS } = require('immutable');
const initState = { token: null, userId: null, loginModalOpened: true };


const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'CONSTLISTS':
            const updatedConstLists = state.updateIn(['constLists', action.name], () => action.val);
            return updatedConstLists;
        case 'token':
            state = { ...state, token: action.val }
            break;
        case 'userId':
            state = { ...state, userId: action.val }
            break;
        case 'loginModalOpened':
            state = { ...state, loginModalOpened: action.val }
            break;
        default:
            return state;
    }
    return state;
};

export default reducer;
