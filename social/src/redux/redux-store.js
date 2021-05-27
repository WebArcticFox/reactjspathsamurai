import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sidebarReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./UserReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;