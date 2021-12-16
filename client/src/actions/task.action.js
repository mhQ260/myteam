import {
    TASKS_GET_REQUEST, TASKS_GET_SUCCESS, TASKS_GET_FAILURE,
    TASK_DETAILS_REQUEST, TASK_DETAILS_SUCCESS, TASK_DETAILS_FAILURE,
    TASK_SAVE_REQUEST, TASK_SAVE_SUCCESS, TASK_SAVE_FAILURE,
    TASK_DELETE_REQUEST, TASK_DELETE_SUCCESS, TASK_DELETE_FAILURE,
} from '../constans/task.const';

import axios from 'axios';

export const listTasks = (projectId) => async (dispatch) => {
    try {
        dispatch({ type: TASKS_GET_REQUEST, payload: projectId });
        const { data } = await axios.get('/api/tasks', { params: { projectId }});
        dispatch({ type: TASKS_GET_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: TASKS_GET_FAILURE, payload: error.message });
    }
}

export const detailsTask = (taskId) => async (dispatch) => {
    try {
        dispatch({ type: TASK_DETAILS_REQUEST, payload: taskId });
        const { data } = await axios.get('/api/tasks/' + taskId);
        dispatch({ type: TASK_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: TASK_DETAILS_FAILURE, payload: error.message });
    }
}

export const saveTask = (task) => async (dispatch, getState) => {
    try {
        dispatch({ type: TASK_SAVE_REQUEST, payload: task });
        const { userSignin: { userInfo } } = getState();

        if(!task._id) {
            const { data } = await axios.post('/api/tasks', task, {
                headers: {
                    'Authorization': 'Bearer' + userInfo.token
                }
            });
            dispatch({ type: TASK_SAVE_SUCCESS, payload: data });
        } else {
            const { data } = await axios.put('/api/tasks/' + task._id, task, { 
                headers: {
                    'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: TASK_SAVE_SUCCESS, payload: data });
        } 
    } catch (error) {
        dispatch({ type: TASK_SAVE_FAILURE, paylodad: error.message });
    }
}