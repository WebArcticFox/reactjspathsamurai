import style from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>
            <div className={style.profile__posts}>
                <Post name="My travel story" message="Hi" likeCount="20" />
                <Post name="My workout in Belarus" message="It's my first post" likeCount="13" />
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