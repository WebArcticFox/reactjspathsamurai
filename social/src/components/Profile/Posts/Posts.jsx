import style from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const formSendPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.comment_form}>
            <div>
                <Field placeholder={"New post"} name={"postText"} component={"textarea"} className={style.comment_form__text_area}  />
            </div>
            <button className={style.comment_form__input}>Post Comment</button>
        </form>
    )
}

const SendPostReduxForm = reduxForm({form: 'sendPost'})(formSendPost)

const Posts = (props) => {


    return (
        <div>
            <div className={style.profile__posts}>
                {props.postArray.map( post => <Post key={post.postId} name={post.postH1} message={post.postText} likeCount={post.likeCount} /> )}
            </div>
            <SendPostReduxForm onSubmit={props.addPost} />
        </div>
    )
}

export default Posts;