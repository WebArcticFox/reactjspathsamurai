import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import notFoundPhoto from "../../assets/images/not_found_photo.svg";

class Users extends React.Component{
     componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
             this.props.setUsers(response.data.items)
             this.props.setTotalUsersCount(response.data.totalCount)
         })
     }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)

        let pages = [];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }

        return (
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.pagination}>
                        { pages.map(page => {
                            return(
                                <div onClick={ (e) => { this.onPageChange(page) } } key={page} className={`${style.pagination_item} ${this.props.currentPage===page? style.active_page: ''}`}>{page}</div>
                            )
                        })}
                    </div>
                    {/*<button className={style.get_users} onClick={this.getUsers}>Get users</button>*/}
                    <div className={style.notification_list}>
                        {
                            this.props.users.map(u => <div className={style.item_friend} key={u.id}>
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
                                    ?<button onClick={ () => {this.props.unFollow(u.id)} } className={style.accept_request}>UnFollow</button>
                                    :<button onClick={ () => {this.props.onFollow(u.id)} } className={style.accept_request}>Follow</button>}
                        </span>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;