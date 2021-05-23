const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
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
                users: [...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID })
export const unFollowAC = (userID) => ({type: UN_FOLLOW, userID })
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;