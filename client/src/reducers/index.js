import { combineReducers } from 'redux';

import { userSignin, userCreate, usersList } from './user.reducer';

const rootReducer = combineReducers({
    userSignin,
    userCreate,
    usersList
});

export default rootReducer; 