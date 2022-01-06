import {
    PROJECTS_GET_REQUEST, PROJECTS_GET_SUCCESS, PROJECTS_GET_FAILURE,
    USER_PROJECTS_GET_REQUEST, USER_PROJECTS_GET_SUCCESS, USER_PROJECTS_GET_FAILURE,
    PROJECT_DETAILS_REQUEST, PROJECT_DETAILS_SUCCESS, PROJECT_DETAILS_FAILURE,
    PROJECT_SAVE_REQUEST, PROJECT_SAVE_SUCCESS, PROJECT_SAVE_FAILURE,
    PROJECT_DELETE_REQUEST, PROJECT_DELETE_SUCCESS, PROJECT_DELETE_FAILURE,
    USERS_IN_PROJECT_REQUEST, USERS_IN_PROJECT_SUCCESS, USERS_IN_PROJECT_FAILURE,
    USER_IN_PROJECT_SAVE_REQUEST, USER_IN_PROJECT_SAVE_SUCCESS, USER_IN_PROJECT_SAVE_FAILURE,
} from '../constans/project.const';

const initialState = {
    loading: {},
    projects: [],
    project: {},
    usersInProject: [],
    userInProject: {},
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

export const userProjectsList = (state = initialState, action) => {

    switch(action.type) {
        case USER_PROJECTS_GET_REQUEST:
            return { loading: true, projects: [] };

        case USER_PROJECTS_GET_SUCCESS:
            return { loading: false, projects: action.payload };

        case USER_PROJECTS_GET_FAILURE:
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

export const usersInProjectList = (state = initialState, action) => {

    switch(action.type) {
        case USERS_IN_PROJECT_REQUEST:
            return { loading: true, usersInProject: [] };

        case USERS_IN_PROJECT_SUCCESS:
            return { loading: false, usersInProject: action.payload };

        case USERS_IN_PROJECT_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export const userInProjectSave = (state = initialState, action) => {

    switch(action.type) {
        case USER_IN_PROJECT_SAVE_REQUEST:
            return { loading: true };

        case USER_IN_PROJECT_SAVE_SUCCESS:
            return { loading: false, success: true, userInProject: action.payload };

        case USER_IN_PROJECT_SAVE_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}