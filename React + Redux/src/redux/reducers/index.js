import { combineReducers } from 'redux';

const appReducer = combineReducers({
    dummy: (state = '') => state,
});

export default (state, action) => {
    return appReducer(state, action);
};
