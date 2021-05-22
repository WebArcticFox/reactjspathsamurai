import React from "react";
import style from './Profile.module.css';
import HeaderProfile from "./ProfileInfo/HeaderProfile/HeaderProfile";
import AboutUser from "./ProfileInfo/AboutUser/AboutUser";
import PostsContainer from "./Posts/PostsContainer";

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
                <PostsContainer />
            </div>
        </div>
    )
}

export default Profile;