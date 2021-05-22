import React from "react";
import Posts from "./Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import StoreContext from "../../../storeContext";


const PostsContainer = (props) => {
    // let state = props.store.getState();

    return (
        <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState()
                let sendPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let updateNewPostText = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                return (
                    <Posts postArray={state.profilePage.postArray} newPostText={state.profilePage.newPostText} updateText={updateNewPostText} sendPost={sendPost}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;