import React from "react";
import Posts from "./Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const PostsContainer = (props) => {
    let state = props.store.getState();

    let sendPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return <Posts postArray={state.profilePage.postArray} newPostText={state.profilePage.newPostText} updateText={updateNewPostText} sendPost={sendPost} />
}

export default PostsContainer;