import { 
    USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILURE,
    USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_CREATE_FAILURE,
    USERS_GET_REQUEST, USERS_GET_SUCCESS, USERS_GET_FAILURE,
 } from '../constans';

import axios from 'axios';
import Cookie from 'js-cookie';

export const signin = (login, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { login, password } });
    try {
        const { data } = await axios.post("/api/users/signin", { login, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAILURE, payload: error.message });
    }
}

export const create = (login, email, password, firstName, lastName ) => async (dispatch) => {
    dispatch({ type: USER_CREATE_REQUEST, payload: { login, email, password, firstName, lastName } });
    try {
        const { data } = await axios.post("/api/users/create", { login, email, password, firstName, lastName });
        dispatch({ type: USER_CREATE_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_CREATE_FAILURE, payload: error.message });
    }
}

export const listUsers = () => async (dispatch) => {
    try {
        dispatch({ type: USERS_GET_REQUEST });
        const { data } = await axios.get('/api/users');
        dispatch({ type: USERS_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USERS_GET_FAILURE, payload: error.msg });
    }
}