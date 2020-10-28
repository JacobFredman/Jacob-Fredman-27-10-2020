// const { fromJS } = require('immutable');
const initState = { token: 'abcdef', userId: '123456' };


const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'CONSTLISTS':
            const updatedConstLists = state.updateIn(['constLists', action.name], () => action.val);
            return updatedConstLists;
        case 'SEARCHINFO':
            const updatedPPLSearchInfo = state.updateIn(['searchInfo', action.name], () => action.val);
            return updatedPPLSearchInfo;
        case 'AUTH':
            const updatedAuth = state.updateIn(['tokenAndDetails'], () => action.val)
            return updatedAuth;
        case 'token':
            state = { ...state, token: action.val }
            break;
        default:
            return state;
    }
    return state;
};

export default reducer;
