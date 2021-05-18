import {NavLink} from "react-router-dom";
import style from "./MessagesUser.module.css";
import React from "react";

const MessagesUser = (props) => {
    return (
        <NavLink to={`/messages/${props.userId}`} className={style.link_chat} activeClassName={style.active}>
            <div className={style.author_thumb}>
                <img src={props.userImage} alt="author" />
            </div>
            <div className={style.notification_event}>
                <span className={style.notification_friend}>{props.userName}</span>
                <span className={style.chat_message_item}>{props.lastMessage}</span>
                <span className={style.notification_date}>
                    <time  dateTime="2004-07-24T18:18">{props.lastMessageDate}</time>
                </span>
            </div>
        </NavLink>
    )
}

export default MessagesUser;