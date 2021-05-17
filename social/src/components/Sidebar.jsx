import Logo from "../logo.svg";
import Profile_icon from "../profile_react.svg";
import Messages_icon from "../messages_react.svg";
import News_icon from "../news_react.svg";
import Music_icon from "../music_react.svg";
import Setting_icon from "../setting_react.svg";
import React from "react";

const Sidebar = () => {
    return (
        <div className="fixed-sidebar">
            <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">

                <a href="/" className="logo">
                    <div className="img-wrap">
                        <img src={Logo} alt="React" width="80px;" />
                    </div>
                </a>
                <div className="left-menu">
                    <a href="#"><img src={Profile_icon} width="40px" /></a>
                    <a href="#"><img src={Messages_icon} width="40px" /></a>
                    <a href="#"><img src={News_icon} width="30px" /></a>
                    <a href="#"><img src={Music_icon} width="30px" /></a>
                    <a href="#"><img src={Setting_icon} width="30px" /></a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;