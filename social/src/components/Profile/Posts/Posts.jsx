import style from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";


const Posts = (props) => {
    return (
        <div>
            <div className={style.profile__posts}>
                {props.PostArray.map( post => <Post name={post.postH1} message={post.postText} likeCount={post.likeCount} /> )}
            </div>
            <form className={style.comment_form}>
                <div className={style.comment_form__text}>
                    <textarea className={style.comment_form__text_area}></textarea>
                </div>
                <button className={style.comment_form__input}>Post Comment</button>
            </form>
        </div>
    )
}

export default Posts;