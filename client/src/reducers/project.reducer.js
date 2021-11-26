import {
    PROJECTS_GET_REQUEST, PROJECTS_GET_SUCCESS, PROJECTS_GET_FAILURE,
    PROJECT_DETAILS_REQUEST, PROJECT_DETAILS_SUCCESS, PROJECT_DETAILS_FAILURE,
    PROJECT_SAVE_REQUEST, PROJECT_SAVE_SUCCESS, PROJECT_SAVE_FAILURE,
    PROJECT_DELETE_REQUEST, PROJECT_DELETE_SUCCESS, PROJECT_DELETE_FAILURE
} from '../constans/project.const';

const initialState = {
    loading: {},
    projects: [],
    project: {}
}

export const projectSave = (state = initialState, action) => {

    switch(action.type) {
        case PROJECT_SAVE_REQUEST:
            return { loading: true };

        case PROJECT_SAVE_SUCCESS:
            return { loading: false, success: true, project: action.payload };

        case PROJECT_SAVE_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export const projectsList = (state = initialState, action) => {

    switch(action.type) {
        case PROJECTS_GET_REQUEST:
            return { loading: true, projects: [] };

        case PROJECTS_GET_SUCCESS:
            return { loading: false, projects: action.payload };

        case PROJECTS_GET_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export const projectDetails = (state = initialState, action) => {

    switch(action.type) {
        case PROJECT_DETAILS_REQUEST:
            return { loading: true };
        
        case PROJECT_DETAILS_SUCCESS:
            return { loading: false, project: action.payload };

        case PROJECT_DETAILS_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}