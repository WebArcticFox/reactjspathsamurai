import Posts from "./Posts";
import {addPost} from "../../../redux/profileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postArray: state.profilePage.postArray,
        newPostText: state.profilePage.newPostText
    }
}

const PostsContainer = connect(mapStateToProps,{addPost})(Posts);

export default PostsContainer;