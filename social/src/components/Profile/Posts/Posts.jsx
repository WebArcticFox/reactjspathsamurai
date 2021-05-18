import style from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";

let PostArray = [
    {
        postId: 1,
        postH1: 'My travel story',
        postText: 'Hi',
        likeCount: '28'
    },
    {
        postId: 1,
        postH1: 'My workout in Belarus',
        postText: 'It\'s my first post',
        likeCount: '13'
    }
]

const Posts = () => {

    return (
        <div>
            <div className={style.profile__posts}>
                {PostArray.map( post => <Post name={post.postH1} message={post.postText} likeCount={post.likeCount} /> )}
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