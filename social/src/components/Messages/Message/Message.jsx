import style from "./Message.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={`${style.message_in_dialog} ${style[props.messageStyle]}`}>
            <div className={style.author_thumb}>
                <img src={props.userImage} alt="author" />
            </div>
            <p>{props.textMessage}</p>
        </div>
    )
}

export default Message