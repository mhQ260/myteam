import { combineReducers } from 'redux';

import { userSignin, userSave, usersList } from './user.reducer';
import { projectSave, projectsList, projectDetails } from './project.reducer';

const rootReducer = combineReducers({
    userSignin,
    userSave,
    usersList,
    projectSave,
    projectsList,
    projectDetails,
});

export default rootReducer; 