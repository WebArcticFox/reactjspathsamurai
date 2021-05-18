import React from "react";
import style from './Messages.module.css';

const Messages = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.list_messages}>
                    <ul className={`${style.notification_list} ${style.chat_message}`}>
                        <li>
                            <div className={style.author_thumb}>
                                <img src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                            </div>
                            <div className={style.notification_event}>
                                <a href="#" className={style.notification_friend}>Diana Jameson</a>
                                <span className={style.chat_message_item}>Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                                <span className={style.notification_date}>
                                    <time  dateTime="2004-07-24T18:18">4 hours ago</time>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className={style.author_thumb}>
                                <img src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                            </div>
                            <div className={style.notification_event}>
                                <a href="#" className={style.notification_friend}>Diana Jameson</a>
                                <span className={style.chat_message_item}>Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                                <span className={style.notification_date}>
                                    <time dateTime="2004-07-24T18:18">4 hours ago</time>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className={style.author_thumb}>
                                <img src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                            </div>
                            <div className={style.notification_event}>
                                <a href="#" className={style.notification_friend}>Diana Jameson</a>
                                <span className={style.chat_message_item}>Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                                <span className={style.notification_date}>
                                    <time dateTime="2004-07-24T18:18">4 hours ago</time>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.now_dialogs}>

                </div>
            </div>
        </div>
    )
}

export default Messages;