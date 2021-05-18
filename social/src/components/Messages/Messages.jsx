import React from "react";
import style from './Messages.module.css';
import {NavLink} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";

const Messages = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.list_messages}>
                    <div className={`${style.notification_list} ${style.chat_message}`}>
                        <NavLink to="/messages/1" className={style.link_chat} activeClassName={style.active}>
                            <div className={style.author_thumb}>
                                <img src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                            </div>
                            <div className={style.notification_event}>
                                <span className={style.notification_friend}>Diana Jameson</span>
                                <span className={style.chat_message_item}>Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                                <span className={style.notification_date}>
                                    <time  dateTime="2004-07-24T18:18">4 hours ago</time>
                                </span>
                            </div>
                        </NavLink>
                        <NavLink to="/messages/2" className={style.link_chat} activeClassName={style.active}>
                            <div className={style.author_thumb}>
                                <img src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                            </div>
                            <div className={style.notification_event}>
                                <span className={style.notification_friend}>Diana Jameson</span>
                                <span className={style.chat_message_item}>Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                                <span className={style.notification_date}>
                                    <time dateTime="2004-07-24T18:18">4 hours ago</time>
                                </span>
                            </div>
                        </NavLink>
                        <NavLink to="/messages/3" className={style.link_chat} activeClassName={style.active}>
                            <div className={style.author_thumb}>
                                <img src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                            </div>
                            <div className={style.notification_event}>
                                <span className={style.notification_friend}>Diana Jameson</span>
                                <span className={style.chat_message_item}>Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                                <span className={style.notification_date}>
                                    <time dateTime="2004-07-24T18:18">4 hours ago</time>
                                </span>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className={style.now_dialogs}>
                    <Route path="/messages/1">
                        <div className={`${style.message_in_dialog} ${style.message_for_me}`}>
                            <div className={style.author_thumb}>
                                <img src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                            </div>
                            <p>Hi James! It’s Diana, I just wanted to let you know that we have to reschedule</p>
                        </div>
                        <div className={`${style.message_in_dialog} ${style.message_for_people}`}>
                            <div className={style.author_thumb}>
                                <img src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                            </div>
                            <p>Hi Diana! How are you?</p>
                        </div>
                        <div className={`${style.message_in_dialog} ${style.message_for_me}`}>
                            <div className={style.author_thumb}>
                                <img src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                            </div>
                            <p>James, can you call me at Friday?</p>
                        </div>
                        <div className={`${style.message_in_dialog} ${style.message_for_people}`}>
                            <div className={style.author_thumb}>
                                <img src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                            </div>
                            <p>Yeah, I can call you at Friday on 6-7 p.m.</p>
                        </div>
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default Messages;