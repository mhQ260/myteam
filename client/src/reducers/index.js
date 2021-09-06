import { combineReducers } from 'redux';

import { userSignin, userRegister } from './user.reducer';

const rootReducer = combineReducers({
    userSignin,
    userRegister
});

export default rootReducer; 