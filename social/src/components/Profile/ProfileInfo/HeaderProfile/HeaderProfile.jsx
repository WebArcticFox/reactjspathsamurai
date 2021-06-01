import style from "./HeaderProfile.module.css";
import React from "react";
import notFoundPhoto from "../../../../assets/images/not_found_photo.svg";

const HeaderProfile = React.memo(props => {

    const uploadPhoto = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return(
        <div>
            <div className={style.top_header_thumb} style={{backgroundImage: `url(${props.profile.photos.large? props.profile.photos.large: notFoundPhoto})`}}>
                {/*<img src={} alt='some value' />*/}
            </div>
            <div className={style.top_header_author}>
                <img className={style.author_thumb} src={props.profile.photos.small? props.profile.photos.small: notFoundPhoto} alt="author" />
                <div className={style.author_content}>
                    <p className={style.author_name}>{props.profile.fullName}</p>
                    <div className={style.country}>{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
            {props.isOwner && <input type={'file'} onChange={uploadPhoto} /> }
        </div>
    )
})

export default HeaderProfile;