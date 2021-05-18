import style from "./Post.module.css";
import React from "react";

const Post = (props) => {
    return(
        <div className={style.profile__posts_item}>
            <div>
                <img className={style.profile__posts_img} src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" />
            </div>
            <div className={style.post__content}>
                <p className={style.profile__posts_item_auth}>{props.name}</p>
                <p>{props.message}</p>
            </div>
            <div>
                <button className={style.post__like}>{props.likeCount} | Like</button>
            </div>
        </div>
    )
}

export default Post;