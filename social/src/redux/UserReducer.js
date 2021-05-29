import {followsAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING_CHANGE = 'IS_FETCHING_CHANGE';
const IS_FOLLOWING_CHANGE = 'IS_FOLLOWING_CHANGE';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case IS_FETCHING_CHANGE: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case IS_FOLLOWING_CHANGE: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ?[...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userID) => ({type: FOLLOW, userID })
export const unFollow = (userID) => ({type: UN_FOLLOW, userID })
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const isFetchingChange = (isFetching) => ({type: IS_FETCHING_CHANGE, isFetching})
export const isFollowingChange = (followingInProgress, userId) => ({type: IS_FOLLOWING_CHANGE, followingInProgress, userId})


// Thunks
export const getUsers = (currentPage, pageSize) => async(dispatch) => {
    dispatch(isFetchingChange(true));
    dispatch(setCurrentPage(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(isFetchingChange(false))
}


export const followUser = (userId) => async (dispatch) => {
    dispatch(isFollowingChange(true, userId))
    let data = await followsAPI.follow(userId)
    if(data.resultCode===0) {
        dispatch(follow(userId))
    }
    dispatch(isFollowingChange(false, userId))
}


export const unFollowUser = (userId) => async (dispatch) => {
    dispatch(isFollowingChange(true, userId))
    let data = await followsAPI.unFollow(userId)
    if(data.resultCode===0) {
        dispatch(unFollow(userId))
    }
    dispatch(isFollowingChange(false, userId))
}



export default usersReducer;