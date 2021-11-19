import {
    USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILURE,
    USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_CREATE_FAILURE,
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

export const userCreate = (state = initialState, action) => {

    switch(action.type) {
        case USER_CREATE_REQUEST:
            return { loading: true };

        case USER_CREATE_SUCCESS:
            return { loading: false, userInfo: action.payload };

        case USER_CREATE_FAILURE:
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