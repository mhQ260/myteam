import { 
    USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILURE,
    USER_SAVE_REQUEST, USER_SAVE_SUCCESS, USER_SAVE_FAILURE,
    USERS_GET_REQUEST, USERS_GET_SUCCESS, USERS_GET_FAILURE,
 } from '../constans';

import axios from 'axios';
import Cookie from 'js-cookie';
import { userSave } from '../reducers/user.reducer';

export const signin = (login, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { login, password } });
    try {
        console.log("Jestem tutaj")
        const { data } = await axios.post('/api/users/signin', { login, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAILURE, payload: error.message });
    }
}

export const saveUser = (user) => async (dispatch, getState) => { 
    try {
        dispatch({ type: USER_SAVE_REQUEST, payload: user });
        const { userSignin: { userInfo } } = getState(); 
        if(!user._id) {
            const { data } = await axios.post('/api/users', user, {
                headers: {
                    'Authorization': 'Bearer' + userInfo.token
                }
            });
            
            dispatch({ type: USER_SAVE_SUCCESS, payload: data });
        } else {
            
            const { data } = await axios.put('/api/users/' + user._id, user, {
                headers: {
                    'Authorization': 'Bearer' + userInfo.token
                }
            });
            dispatch({ type: USER_SAVE_SUCCESS, payload: data });
        }

    } catch (error) {
        dispatch({ type: USER_SAVE_FAILURE, payload: error.message });
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