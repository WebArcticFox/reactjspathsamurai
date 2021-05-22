import React from "react";
import style from "./FriendList.module.css";
import FriendItem from "./FriendItem/FriendItem";

const FriendList = (props) => {
    return (
        <div className={style.friend_list}>
            { props.friendList.map(friend => <FriendItem userImg={friend.userImage} userName={friend.userName} /> ) }
        </div>
    )
}

export default FriendList;