import {
    TASKS_GET_REQUEST, TASKS_GET_SUCCESS, TASKS_GET_FAILURE,
    TASK_DETAILS_REQUEST, TASK_DETAILS_SUCCESS, TASK_DETAILS_FAILURE,
    TASK_SAVE_REQUEST, TASK_SAVE_SUCCESS, TASK_SAVE_FAILURE,
    TASK_DELETE_REQUEST, TASK_DELETE_SUCCESS, TASK_DELETE_FAILURE,
} from '../constans/task.const';

const initialState = {
    loading: {},
    tasks: [],
    task: {},
}

export const tasksList = (state = initialState, action) => {

    switch(action.type) {
        case TASKS_GET_REQUEST:
            return { loading: true, tasks: [] };

        case TASKS_GET_SUCCESS:
            return { loading: false, tasks: action.payload };

        case TASKS_GET_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export const taskDetails = (state = initialState, action) => {

    switch(action.type) {
        case TASK_DETAILS_REQUEST:
            return { loading: true };
        
        case TASK_DETAILS_SUCCESS:
            return { loading: false, task: action.payload };

        case TASK_DETAILS_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export const taskSave = (state = initialState, action) => {

    switch(action.type) {
        case TASK_SAVE_REQUEST:
            return { loading: true };

        case TASK_SAVE_SUCCESS:
            return { loading: false, success: true, task: action.payload };

        case TASK_SAVE_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}