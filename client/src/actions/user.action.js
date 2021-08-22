import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILURE } from '../constans';

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