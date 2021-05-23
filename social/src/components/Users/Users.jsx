import React from "react";
import style from "./Users.module.css";

let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                userImage: 'https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg',
                fullName: 'Mariya',
                status: 'I am in React',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                },
                followed: true
            },
            {
                id: 2,
                userImage: 'https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg',
                fullName: 'Daria',
                status: 'I like my work',
                location: {
                    city: 'Berlin',
                    country: 'Germany'
                },
                followed: false
            },
            {
                id: 3,
                userImage: 'https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg',
                fullName: 'Mikhail',
                status: 'My love - it\'s my job',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                },
                followed: true
            }
        ])
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.notification_list}>
                    {
                        props.users.map(u => <div className={style.item_friend} key={u.id}>
                            <div className={style.author_thumb}>
                                <img src={u.userImage} alt="author" />
                            </div>
                            <div className={style.notification_event}>
                                <a href="#" className={style.notification_friend}>{u.fullName}</a>
                                <span className={style.chat_message_item}>Location: {u.location.city}, {u.location.country}</span>
                            </div>
                            <div className={style.notification_content}>
                                <p>{u.status}</p>
                            </div>
                            <span className={style.notification_icon}>
                                { u.followed
                                ?<button onClick={ () => {props.unFollow(u.id)} } className={style.accept_request}>UnFollow</button>
                                :<button onClick={ () => {props.onFollow(u.id)} } className={style.accept_request}>Follow</button>}
                        </span>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Users;