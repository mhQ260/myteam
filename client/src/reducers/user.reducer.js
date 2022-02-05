import {
    USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILURE,
    USER_GET_REQUEST, USER_GET_SUCCESS, USER_GET_FAILURE,
    USER_SAVE_REQUEST, USER_SAVE_SUCCESS, USER_SAVE_FAILURE,
    USERS_GET_REQUEST, USERS_GET_SUCCESS, USERS_GET_FAILURE,
} from '../constans';

import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
    loading: {},
    userSignin: { userInfo: {} },
    users: []
};

export const userSignin = ( state = initialState, action ) => {
    switch(action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };

        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload };

        case USER_SIGNIN_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export const userSave = (state = initialState, action) => {

    switch(action.type) {
        case USER_SAVE_REQUEST:
            return { loading: true };

        case USER_SAVE_SUCCESS:
            return { loading: false, success: true, user: action.payload };

        case USER_SAVE_FAILURE:
            return { loading: false, error: action.payload };
            
        default:
            return state;
    }
}

export const usersList = (state = initialState, action) => {
    switch(action.type) {
        case USERS_GET_REQUEST:
            return { loading: true, users: [] };

        case USERS_GET_SUCCESS:
            return { loading: false, users: action.payload };

        case USERS_GET_FAILURE:
            return {loading: false, error: action.payload };

        default:
            return state;
    }
}

export const userGet = (state = initialState, action) => {
    switch(action.type) {
        case USER_GET_REQUEST:
            return { loading: true, user: [] };

        case USER_GET_SUCCESS:
            return { loading: false, user: action.payload };

        case USER_GET_FAILURE:
            return {loading: false, error: action.payload };

        default:
            return state;
    }
}