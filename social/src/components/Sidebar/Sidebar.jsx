import Logo from "../../logo.svg";
import Profile_icon from "../../profile_react.svg";
import Messages_icon from "../../messages_react.svg";
import News_icon from "../../news_react.svg";
import Music_icon from "../../music_react.svg";
import Setting_icon from "../../setting_react.svg";
import Users_icon from "../../users_react.svg";
import React from "react";
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import FriendList from "./FriendList/FriendList";

const Sidebar = (props) => {
    return (
        <div className={style.fixed_sidebar}>
            <div className={style.fixed_sidebar_left} id="sidebar-left">

                <NavLink to="/profile" className={style.logo}>
                    <div className={style.img_wrap}>
                        <img src={Logo} alt="React" width="80px;" />
                    </div>
                </NavLink>
                <div className={style.left_menu}>
                    <NavLink to="/profile" className={style.item} activeClassName={style.active}><img alt='some value' src={Profile_icon} width="40px" /></NavLink>
                    <NavLink to="/users" className={style.item} activeClassName={style.active}><img alt='some value' src={Users_icon} width="30px" /></NavLink>
                    <NavLink to="/messages" className={style.item} activeClassName={style.active}><img alt='some value' src={Messages_icon} width="40px" /></NavLink>
                    <NavLink to="/news" className={style.item} activeClassName={style.active}><img alt='some value' src={News_icon} width="30px" /></NavLink>
                    <NavLink to="/music" className={style.item} activeClassName={style.active}><img alt='some value' src={Music_icon} width="30px" /></NavLink>
                    <NavLink to="/settings" className={style.item} activeClassName={style.active}><img alt='some value' src={Setting_icon} width="30px" /></NavLink>
                </div>
                <FriendList friendList={props.friendList} />
            </div>
        </div>
    )
}

export default Sidebar;