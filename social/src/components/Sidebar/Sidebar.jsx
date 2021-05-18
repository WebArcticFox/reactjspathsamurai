import Logo from "../../logo.svg";
import Profile_icon from "../../profile_react.svg";
import Messages_icon from "../../messages_react.svg";
import News_icon from "../../news_react.svg";
import Music_icon from "../../music_react.svg";
import Setting_icon from "../../setting_react.svg";
import React from "react";
import style from './Sidebar.module.css';

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
                    <a href="#" className={`${style.item} ${style.active}`}><img src={Profile_icon} width="40px" /></a>
                    <a href="#" className={style.item}><img src={Messages_icon} width="40px" /></a>
                    <a href="#" className={style.item}><img src={News_icon} width="30px" /></a>
                    <a href="#" className={style.item}><img src={Music_icon} width="30px" /></a>
                    <a href="#" className={style.item}><img src={Setting_icon} width="30px" /></a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;