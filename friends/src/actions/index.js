import axios from 'axios';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

// return axios returns a promise that can be chained in the login
// function in the Login page

// Setting the token received onto local storage

// catch any errors

export const login = userInfo => dispatch => {
    dispatch({ type: LOGIN_START });

    return axios
        .post('http://localhost:5000/api/login', userInfo)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        })
        .catch(err => console.log(err));
};
