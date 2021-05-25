const SET_USER_DATA = 'SET_USER_DATA';


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
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email} })

export default authReducer