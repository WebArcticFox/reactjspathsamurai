import React from "react";
import style from "../Users.module.css";
import notFoundPhoto from "../../../assets/images/not_found_photo.svg";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unFollowUser, followUser}) => {
    return (
        <div className={style.item_friend} key={user.id}>
            <NavLink to={`profile/${user.id}`} className={style.author_thumb}>
                <img src={user.photos.small != null ? user.photos.small: notFoundPhoto} alt="author" />
            </NavLink>
            <div className={style.notification_event}>
                <NavLink to={`profile/${user.id}`} className={style.notification_friend}>{user.name}</NavLink>
                <span className={style.chat_message_item}>Location notfound</span>
            </div>
            <div className={style.notification_content}>
                <p>{user.status}</p>
            </div>
            <span className={style.notification_icon}>
            { user.followed
                ?<button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => { unFollowUser(user.id)} } className={style.accept_request}>UnFollow</button>
                :<button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => { followUser(user.id)} } className={style.accept_request}>Follow</button>}
            </span>
        </div>
    )
}

export default User;