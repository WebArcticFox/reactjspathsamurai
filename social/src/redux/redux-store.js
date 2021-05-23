import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sidebarReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./UserReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;