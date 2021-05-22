import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sidebarReducer";
import messagesReducer from "./messagesReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messagesReducer,
    sideBar: sideBarReducer
})

let store = createStore(reducers);

export default store;