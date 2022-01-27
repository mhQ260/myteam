import { combineReducers } from 'redux';

import { userSignin, userSave, usersList } from './user.reducer';
import { projectSave, projectsList, userProjectsList, projectDetails, usersInProjectList, userInProjectSave } from './project.reducer';
import { taskSave, tasksList, userTasksList, taskDetails } from './task.reducer';


const rootReducer = combineReducers({
    userSignin,
    userSave,
    usersList,
    projectSave,
    projectsList,
    userProjectsList,
    projectDetails,
    usersInProjectList,
    userInProjectSave,
    taskSave,
    tasksList,
    userTasksList,
    taskDetails
});

export default rootReducer; 