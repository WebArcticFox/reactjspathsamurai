import style from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreate, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsItem/FormsItem";

const maxLength10 = maxLengthCreate(10)


const formSendPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.comment_form}>
            <div>
                <Field placeholder={"New post"} name={"postText"} component={TextArea} className={style.comment_form__text_area} validate={[required, maxLength10]} />
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