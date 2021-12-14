import {
    PROJECTS_GET_REQUEST, PROJECTS_GET_SUCCESS, PROJECTS_GET_FAILURE,
    PROJECT_DETAILS_REQUEST, PROJECT_DETAILS_SUCCESS, PROJECT_DETAILS_FAILURE,
    PROJECT_SAVE_REQUEST, PROJECT_SAVE_SUCCESS, PROJECT_SAVE_FAILURE,
    PROJECT_DELETE_REQUEST, PROJECT_DELETE_SUCCESS, PROJECT_DELETE_FAILURE,
    USERS_IN_PROJECT_REQUEST, USERS_IN_PROJECT_SUCCESS, USERS_IN_PROJECT_FAILURE,
    USER_IN_PROJECT_SAVE_REQUEST, USER_IN_PROJECT_SAVE_SUCCESS, USER_IN_PROJECT_SAVE_FAILURE
} from '../constans/project.const';

import axios from 'axios';

export const saveProject = (project) => async (dispatch, getState) => {
    try {
        dispatch({ type: PROJECT_SAVE_REQUEST, payload: project });
        const { userSignin: { userInfo } } = getState();

        if(!project._id) {
            const { data } = await axios.post('/api/projects', project, {
                headers: {
                    'Authorization': 'Bearer' + userInfo.token
                }
            });
            dispatch({ type: PROJECT_SAVE_SUCCESS, payload: data });
        } else {
            const { data } = await axios.put('/api/projects/' + project._id, project, { 
                headers: {
                    'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: PROJECT_SAVE_SUCCESS, payload: data });
        } 
    } catch (error) {
        dispatch({ type: PROJECT_SAVE_FAILURE, paylodad: error.message });
    }
}

export const listProjects = () => async (dispatch) => {
    try {
        dispatch({ type: PROJECTS_GET_REQUEST });
        const { data } = await axios.get('/api/projects');
        dispatch({ type: PROJECTS_GET_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PROJECTS_GET_FAILURE, payload: error.message });
    }
}

export const detailsProject = (projectId) => async (dispatch) => {
    try {
        dispatch({ type: PROJECT_DETAILS_REQUEST, payload: projectId });
        const { data } = await axios.get('/api/projects/' + projectId);
        dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PROJECT_DETAILS_FAILURE, payload: error.message });
    }
}

export const listUsersInProject = (projectId) => async (dispatch) => {
    try {
        dispatch({ type: USERS_IN_PROJECT_REQUEST, payload: projectId });
        const { data } = await axios.get('/api/projectMember/' + projectId);
        dispatch({ type: USERS_IN_PROJECT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USERS_IN_PROJECT_FAILURE, payload: error.msg });
    }
}

export const saveUserToProject = (member) => async (dispatch) => {
    try {
        dispatch({ type: USER_IN_PROJECT_SAVE_REQUEST, payload: member });
        const { data } = await axios.post('/api/projectMember/addMember', member);
        dispatch({ type: USER_IN_PROJECT_SAVE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_IN_PROJECT_SAVE_FAILURE, payload: error.msg });
    }
}