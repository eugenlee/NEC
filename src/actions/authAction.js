import axios from 'axios';
import { returnErrors } from './errorAction';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
}   from './types';

export const loadUser = () => (dispatch, getState) => {
    
    dispatch({ type: USER_LOADING });
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['x-auth-token'] = token;
    }
    axios.get('http://localhost:5000/auth/user', config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};