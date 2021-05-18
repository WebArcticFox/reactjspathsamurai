import Logo from "../../logo.svg";
import Profile_icon from "../../profile_react.svg";
import Messages_icon from "../../messages_react.svg";
import News_icon from "../../news_react.svg";
import Music_icon from "../../music_react.svg";
import Setting_icon from "../../setting_react.svg";
import React from "react";
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={style.fixed_sidebar}>
            <div className={style.fixed_sidebar_left} id="sidebar-left">

                <a href="/" className={style.logo}>
                    <div className={style.img_wrap}>
                        <img src={Logo} alt="React" width="80px;" />
                    </div>
                </a>
                <div className={style.left_menu}>
                    <NavLink to="/profile" className={style.item} activeClassName={style.active}><img src={Profile_icon} width="40px" /></NavLink>
                    <NavLink to="/messages" className={style.item} activeClassName={style.active}><img src={Messages_icon} width="40px" /></NavLink>
                    <NavLink to="/news" className={style.item} activeClassName={style.active}><img src={News_icon} width="30px" /></NavLink>
                    <NavLink to="/music" className={style.item} activeClassName={style.active}><img src={Music_icon} width="30px" /></NavLink>
                    <NavLink to="/settings" className={style.item} activeClassName={style.active}><img src={Setting_icon} width="30px" /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;