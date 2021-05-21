import style from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";


const Posts = (props) => {
    let newPostArea = React.createRef()

    let sendPost = () => {
        props.sendPost();
    }

    let onPostChange = () => {
        props.updateNewPostText(newPostArea.current.value)
    }

    return (
        <div>
            <div className={style.profile__posts}>
                {props.PostArray.map( post => <Post name={post.postH1} message={post.postText} likeCount={post.likeCount} /> )}
            </div>
            <div className={style.comment_form}>
                <div className={style.comment_form__text}>
                    <textarea ref={newPostArea} onChange={ onPostChange } className={style.comment_form__text_area} value={props.newPostText}></textarea>
                </div>
                <button onClick={ sendPost } className={style.comment_form__input}>Post Comment</button>
            </div>
        </div>
    )
}

export default Posts;