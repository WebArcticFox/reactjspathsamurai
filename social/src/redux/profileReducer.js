import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_FETCHING_CHANGE = 'IS_FETCHING_CHANGE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                postId: 5,
                postH1: 'Test',
                postText: action.postText,
                likeCount: 0
            }
            return {
                ...state,
                postArray: [...state.postArray, newPost]
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
        case DELETE_POST: {
            return {
                ...state,
                postArray: state.postArray.filter(post => post.postId!==action.postId)
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

export const addPost = (data) => ({type: ADD_POST, postText: data.postText})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const isFetchingChange = (isFetching) => ({type: IS_FETCHING_CHANGE, isFetching})
export const setStatus = (status) => ({type:SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


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