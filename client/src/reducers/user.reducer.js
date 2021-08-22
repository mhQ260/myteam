import {
    USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILURE
} from '../constans';

import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
    loading: {},
    userSignin: { userInfo }
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