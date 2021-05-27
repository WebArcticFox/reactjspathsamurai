import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_FETCHING_CHANGE = 'IS_FETCHING_CHANGE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profile: null,
    isFetching: false,
    postArray: [
        {
            postId: 1,
            postH1: 'My travel story',
            postText: 'Hi',
            likeCount: '28'
        },
        {
            postId: 2,
            postH1: 'My workout in Belarus',
            postText: 'It\'s my first post',
            likeCount: '13'
        }
    ],
    newPostText: '',
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                postId: 5,
                postH1: 'Test',
                postText: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postArray: [...state.postArray, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.userProfile
            }
        case IS_FETCHING_CHANGE: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST})
export const updatePostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const isFetchingChange = (isFetching) => ({type: IS_FETCHING_CHANGE, isFetching})
export const setStatus = (status) => ({type:SET_STATUS, status})


// Thunk

export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(isFetchingChange(true));
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
            dispatch(isFetchingChange(false));
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if(data.resultCode===0) {
                dispatch(setStatus(status));
            }
        })
    }
}

export default profileReducer;