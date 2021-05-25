import style from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";



const Posts = (props) => {
    let newPostArea = React.createRef()

    let onSendPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        props.updatePostText(newPostArea.current.value)
    }

    return (
        <div>
            <div className={style.profile__posts}>
                {props.postArray.map( post => <Post key={post.postId} name={post.postH1} message={post.postText} likeCount={post.likeCount} /> )}
            </div>
            <div className={style.comment_form}>
                <div>
                    <textarea ref={newPostArea} onChange={ onPostChange } className={style.comment_form__text_area} value={props.newPostText}></textarea>
                </div>
                <button onClick={ onSendPost } className={style.comment_form__input}>Post Comment</button>
            </div>
        </div>
    )
}

export default Posts;