import React from "react";
import style from "./FriendItem.module.css";

const FriendItem = (props) => {
    return (
        <div className={style.friend_item}>
            <img src={props.userImg} alt="React" width="80px;" />
            <span>{props.userName}</span>
        </div>
    )
}

export default FriendItem;