import * as React from 'react';
// import * as RootNavigation from './../navigation/RootNavigation.js';

const SET_USER = "SET_USER";
const LODING = "LOADING";
const LOGOUT = "LOGOUT";

const initialState = {
    progressVisible: false,
    email: '',
    password: '',
    name: '',
};

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_USER:
            return {
                ...state,
                users: {
                    id: action.payload.ID,
                    abn: action.payload.abn,
                    user_email: action.payload.user_email,
                   
                }
            };
        case LODING:
            return {
                ...state,
                progressVisible: action.load.progressVisible,
            }
        
        case LOGOUT:
            return {
                ...state,
                ...initialState,
            }
        default:
            return state;
    }
}

export const logout = () => async (dispatch) => {

    dispatch({ type: LOGOUT});
    // RootNavigation.navigate('login');

};

