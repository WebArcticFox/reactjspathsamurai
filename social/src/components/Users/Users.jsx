import React from "react";
import style from "./Users.module.css";
import Pagination from "../common/Pagination/Pagination";
import User from "./User/User";

let Users = (props) => {

    return (
        <div className={style.container}>
            <div className={style.content}>

                <div className={style.notification_list}>
                    {
                        props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} unFollowUser={props.unFollowUser} followUser={props.followUser}  />)
                    }
                </div>
                <Pagination totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChange={props.onPageChange} currentPage={props.currentPage} />
            </div>
        </div>
    )
}

export default Users;