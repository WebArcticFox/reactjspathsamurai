import React from "react";
import style from "./Users.module.css";
import notFoundPhoto from "../../assets/images/not_found_photo.svg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)

    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }


    return (
        <div className={style.container}>
            <div className={style.content}>

                <div className={style.notification_list}>
                    {
                        props.users.map(u => <div className={style.item_friend} key={u.id}>
                            <NavLink to={`profile/${u.id}`} className={style.author_thumb}>
                                <img src={u.photos.small != null ? u.photos.small: notFoundPhoto} alt="author" />
                            </NavLink>
                            <div className={style.notification_event}>
                                <NavLink to={`profile/${u.id}`} className={style.notification_friend}>{u.name}</NavLink>
                                <span className={style.chat_message_item}>Location notfound</span>
                            </div>
                            <div className={style.notification_content}>
                                <p>{u.status}</p>
                            </div>
                            <span className={style.notification_icon}>
                            { u.followed
                                ?<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => { props.unFollowUser(u.id)} } className={style.accept_request}>UnFollow</button>
                                :<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => { props.followUser(u.id)} } className={style.accept_request}>Follow</button>}
                    </span>
                        </div>)
                    }
                </div>
                <div className={style.pagination}>
                    { pages.map(page => {
                        return(
                            <div onClick={ (e) => { props.onPageChange(page) } } key={page} className={`${style.pagination_item} ${props.currentPage===page? style.active_page: ''}`}>{page}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Users;