import { combineReducers } from 'redux';

import { userSignin } from './user.reducer';

const rootReducer = combineReducers({
    userSignin,
});

export default rootReducer; 