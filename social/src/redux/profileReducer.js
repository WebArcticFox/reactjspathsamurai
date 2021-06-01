import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_FETCHING_CHANGE = 'IS_FETCHING_CHANGE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';

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
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})

// Thunk

export const getProfile = (userId) => async (dispatch) => {
    dispatch(isFetchingChange(true));
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data));
    dispatch(isFetchingChange(false));

}

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if(data.resultCode===0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let data = await profileAPI.uploadPhoto(file)
    if(data.resultCode===0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
}

export default profileReducer;