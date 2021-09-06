import { 
    USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILURE,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE,
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

export const register = (login, email, password, firstName, lastName ) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { login, email, password, firstName, lastName } });
    try {
        const { data } = await axios.post("/api/users/register", { login, email, password, firstName, lastName });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILURE, payload: error.message });
    }
}