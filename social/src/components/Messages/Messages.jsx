import React from "react";
import style from './Messages.module.css';
import Message from "./Message/Message";
import MessagesUser from "./MessagesUser/MessagesUser";
import {Redirect, Route} from "react-router-dom";


const Messages = (props) => {

    let newMessageArea = React.createRef()

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        props.updateMessageText(newMessageArea.current.value)
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.list_messages}>
                    <div className={`${style.notification_list} ${style.chat_message}`}>
                        {props.messagesUsers.map( user => <MessagesUser key={user.userId} userId={user.userId} userImage={user.userImage} userName={user.userName} lastMessage={user.lastMessage} lastMessageDate={user.lastMessageDate} /> )}
                    </div>
                </div>
                <div className={style.now_dialogs}>
                    <Route path="/messages/1">
                        {props.messagesArray.map( message => <Message key={message.messageId} userImage={message.userImage} textMessage={message.textMessage} messageStyle={message.messageStyle} /> )}
                        <div className={style.comment_form}>
                            <div className={style.comment_form__text}>
                                <textarea ref={newMessageArea} value={props.currentMessageText} onChange={ onMessageChange } className={style.comment_form__text_area}></textarea>
                            </div>
                            <button onClick={ onSendMessage } className={style.comment_form__input}>Send</button>
                        </div>
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default Messages;