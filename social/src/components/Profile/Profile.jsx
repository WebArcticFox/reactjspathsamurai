import React from "react";
import style from './Profile.module.css';
import HeaderProfile from "./ProfileInfo/HeaderProfile/HeaderProfile";
import AboutUser from "./ProfileInfo/AboutUser/AboutUser";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Prealoader/Preloader";
import ProfileStatusHooks from "./ProfileInfo/ProfileStatus/ProfileStatusHooks";

const Profile = (props) => {

    if(!props.profile) {
        return (<Preloader />)
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <HeaderProfile profile={props.profile} savePhoto={props.savePhoto} isOwner={props.isOwner} />
            </div>
            <div className={style.content}>
                <AboutUser profile={props.profile} />
            </div>
            <div className={style.content}>
                <ProfileStatusHooks isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div className={style.content}>
                <PostsContainer />
            </div>
        </div>
    )
}

export default Profile;