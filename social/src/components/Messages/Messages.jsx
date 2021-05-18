import React from "react";
import style from './Messages.module.css';
import {NavLink} from "react-router-dom";
import {Route} from "react-router-dom";

let MessagesUsers = [
    {
        userId: 1,
        userImage: 'https://st.fl.ru/users/na/nadezhdaNade/foto/f_1455b7479a7e07ac.jpg',
        userName: 'Diana',
        lastMessage: 'Hi Alex! It’s Diana, I just wanted to let you know that we have to reschedule',
        lastMessageDate: '4 hours ago'
    },
    {
        userId: 2,
        userImage: 'https://st.fl.ru/users/ka/kate-seo/foto/f_3726045b60cd904f.jpeg',
        userName: 'Julia',
        lastMessage: 'Hi! Can you help me?',
        lastMessageDate: '1 day ago'
    },
    {
        userId: 3,
        userImage: 'https://st.fl.ru/users/Mi/Mihail_Kachan/foto/f_8095d9e1685c17b9.jpg',
        userName: 'Michail',
        lastMessage: 'Hello man! I can\'t get YouTube play for React',
        lastMessageDate: '2 days ago'
    },
]

let MessagesArray = [
    {
        messageId: 1,
        userImage: "https://st.fl.ru/users/na/nadezhdaNade/foto/f_1455b7479a7e07ac.jpg",
        textMessage: 'Hi James! It’s Diana, I just wanted to let you know that we have to reschedule',
        messageStyle: style.message_for_me
    },
    {
        messageId: 2,
        userImage: "https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg",
        textMessage: 'Hi Diana! How are you?',
        messageStyle: style.message_for_people
    },
    {
        messageId: 3,
        userImage: "https://st.fl.ru/users/na/nadezhdaNade/foto/f_1455b7479a7e07ac.jpg",
        textMessage: 'Alex, can you call me at Friday?',
        messageStyle: style.message_for_me
    },
    {
        messageId: 4,
        userImage: "https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg",
        textMessage: 'Yeah, I can call you at Friday on 6-7 pm',
        messageStyle: style.message_for_people
    },
]

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

const MessageItem = (props) => {
    return (
        <div className={`${style.message_in_dialog} ${props.messageStyle}`}>
            <div className={style.author_thumb}>
                <img src={props.userImage} alt="author" />
            </div>
            <p>{props.textMessage}</p>
        </div>
    )
}

const Messages = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.list_messages}>
                    <div className={`${style.notification_list} ${style.chat_message}`}>
                        {MessagesUsers.map( user => <MessagesUser userId={user.userId} userImage={user.userImage} userName={user.userName} lastMessage={user.lastMessage} lastMessageDate={user.lastMessageDate} /> )}
                    </div>
                </div>
                <div className={style.now_dialogs}>
                    <Route path="/messages/1">
                        {MessagesArray.map( message => <MessageItem userImage={message.userImage} textMessage={message.textMessage} messageStyle={message.messageStyle} /> )}
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default Messages;