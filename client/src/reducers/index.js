import { combineReducers } from 'redux';

import { userSignin, userSave, usersList } from './user.reducer';
import { projectSave, projectsList, projectDetails, usersInProjectList, userInProjectSave } from './project.reducer';

const rootReducer = combineReducers({
    userSignin,
    userSave,
    usersList,
    projectSave,
    projectsList,
    projectDetails,
    usersInProjectList,
    userInProjectSave,
});

export default rootReducer; 