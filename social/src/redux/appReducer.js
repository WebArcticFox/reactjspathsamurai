import {getMyAuth} from "./authReducer";

const INITIALIZED = 'INITIALIZED';

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED})
// Thunk

export const initializeApp = () =>  (dispatch) => {
    dispatch(getMyAuth()).then(() => {
        dispatch(initializedSuccess())
    })
}


export default appReducer