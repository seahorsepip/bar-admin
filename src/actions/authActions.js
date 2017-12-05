import axios from 'axios';
import { SET_CURRENT_USER } from './types';
import { push } from 'react-router-redux';
import jwt from 'jsonwebtoken';


export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function logIn(data){
    return dispatch => {
        const encodedBody = getEncodedLoginBody();
        encodedBody.append("username", data.username);
        encodedBody.append("password", data.password);

        const settings = {
            method: "POST",
            headers: getHeaders(),
            body: encodedBody
        };

        return fetch('http://maatwerk.works/oauth/token', settings)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                  } else {
                    throw new Error('Something went wrong');
                }
            })
            .then((res) => {
                const token = res.access_token;
                getUserDetails(token).then((res) => {
                    const userDetails = {
                        access_token: token,
                        username: res.username,
                        isAdmin: res.isAdmin,
                        email: res.email,
                        id: res.id
                    };
                    localStorage.setItem('token', JSON.stringify(userDetails));
                    dispatch(setCurrentUser(userDetails));
                })

            })
    }
}

export function getUserDetails(token){
    return fetch('http://maatwerk.works/oauth/me', {headers: {Authorization: 'Bearer ' + token}})
    .then((res) => {
        return res.json();
    })
}

function getHeaders() {
    const clientHeaders = new Headers();
    clientHeaders.append('content-type', 'application/x-www-form-urlencoded');
    clientHeaders.append('authorization', 'Basic ' + getBase64Client());
    return clientHeaders;
}

function getEncodedLoginBody() {
    const encodedBody = new URLSearchParams();
    encodedBody.append("grant_type", "password");
    encodedBody.append("scope", "bar");
    return encodedBody;
}

function getBase64Client() {
    return btoa('Bar' + ":" + '8e6ebc1f-26db-4c0d-b773-35155cd3fc5f');
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch(setCurrentUser({}));
    }
}