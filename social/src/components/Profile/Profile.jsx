import React from "react";
import style from './Profile.module.css';
import Posts from "./Posts/Posts";
import HeaderProfile from "./ProfileInfo/HeaderProfile/HeaderProfile";
import AboutUser from "./ProfileInfo/AboutUser/AboutUser";

const Profile = (props) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <HeaderProfile />
            </div>
            <div className={style.content}>
                <AboutUser />
            </div>
            <div className={style.content}>
                <Posts state={props.state}  dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Profile;