import style from "./HeaderProfile.module.css";
import React from "react";
import notFoundPhoto from "../../../../assets/images/not_found_photo.svg";

const HeaderProfile = (props) => {
    return(
        <div>
            <div className={style.top_header_thumb}>
                <img src={props.profile.photos.large? props.profile.photos.large: notFoundPhoto} alt='some value' />
            </div>
            <div className={style.top_header_author}>
                <img className={style.author_thumb} src={props.profile.photos.small? props.profile.photos.small: notFoundPhoto} alt="author" />
                <div className={style.author_content}>
                    <p className={style.author_name}>{props.profile.fullName}</p>
                    <div className={style.country}>{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderProfile;