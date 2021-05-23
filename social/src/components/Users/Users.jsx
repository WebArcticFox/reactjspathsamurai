import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import notFoundPhoto from "../../assets/images/not_found_photo.svg";

let Users = (props) => {
    let getUsers = () => {
        if(props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }



    return (
        <div className={style.container}>
            <div className={style.content}>
                <button className={style.get_users} onClick={getUsers}>Get users</button>
                <div className={style.notification_list}>
                    {
                        props.users.map(u => <div className={style.item_friend} key={u.id}>
                            <div className={style.author_thumb}>
                                <img src={u.photos.small != null ? u.photos.small: notFoundPhoto} alt="author" />
                            </div>
                            <div className={style.notification_event}>
                                <a href="#" className={style.notification_friend}>{u.name}</a>
                                <span className={style.chat_message_item}>Location notfound</span>
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