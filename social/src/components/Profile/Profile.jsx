import React from "react";
import style from './Profile.module.css';
import HeaderProfile from "./ProfileInfo/HeaderProfile/HeaderProfile";
import AboutUser from "./ProfileInfo/AboutUser/AboutUser";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Prealoader/Preloader";
import ProfileStatus from "./ProfileInfo/ProfileStatus/ProfileStatus";

const Profile = (props) => {

    if(!props.profile) {
        return (<Preloader />)
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <HeaderProfile profile={props.profile} />
            </div>
            <div className={style.content}>
                <AboutUser profile={props.profile} />
            </div>
            <div className={style.content}>
                <ProfileStatus status='Hi' />
            </div>
            <div className={style.content}>
                <PostsContainer />
            </div>
        </div>
    )
}

export default Profile;