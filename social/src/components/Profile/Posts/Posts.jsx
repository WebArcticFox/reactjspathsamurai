import style from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";



const Posts = (props) => {
    debugger
    let newPostArea = React.createRef()

    let onSendPost = () => {
        props.sendPost();
    }

    let onPostChange = () => {
        props.updateText(newPostArea.current.value)
    }

    return (
        <div>
            <div className={style.profile__posts}>
                {props.postArray.map( post => <Post name={post.postH1} message={post.postText} likeCount={post.likeCount} /> )}
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