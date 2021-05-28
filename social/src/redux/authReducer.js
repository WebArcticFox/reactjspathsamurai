import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const DELETE_USER_DATA = 'DELETE_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                id: action.data.id,
                email: action.data.email,
                login: action.data.login,
                isAuth: true
            }
        }
        case DELETE_USER_DATA: {
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuth: false
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email} })
export const deleteUserData = () => ({type: DELETE_USER_DATA })

// Thunk

export const getMyAuth = () => {
    return (dispatch) => {
        return authAPI.authMe().then(data => {
            if(data.resultCode===0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id,login,email))
            }
        })
    }
}

export const sendLogin = (formData) => {
    return (dispatch) => {
        authAPI.login(formData).then(data => {
            if(data.resultCode===0){
                dispatch(getMyAuth())
            }else{
                dispatch(stopSubmit("login", {_error: data.messages}))
            }
        })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if(data.resultCode===0){
               dispatch(deleteUserData())
            }
        })
    }
}

export default authReducer