import Posts from "./Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postArray: state.profilePage.postArray,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendPost: () => {
            dispatch(addPostActionCreator());
        },
        updateText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;