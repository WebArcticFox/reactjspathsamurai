import React from "react";
import style from './Messages.module.css';
import Message from "./Message/Message";
import MessagesUser from "./MessagesUser/MessagesUser";
import {Route} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsItem/FormsItem";
import {maxLengthCreate, required} from "../../utils/validators/validators";

const maxLength100 = maxLengthCreate(100)

const FormMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.comment_form}>
            <div className={style.comment_form__text}>
                <Field placeholder={"New message"} name={"messageText"} component={TextArea} className={style.comment_form__text_area} validate={[required, maxLength100]} />
            </div>
            <button className={style.comment_form__input}>Send</button>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({form: 'sendMessage'})(FormMessage)

const Messages = (props) => {
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
                        <SendMessageReduxForm onSubmit={props.sendMessage} />
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default Messages;