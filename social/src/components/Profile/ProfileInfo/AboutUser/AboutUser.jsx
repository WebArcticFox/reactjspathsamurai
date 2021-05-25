import style from "./AboutUser.module.css";
import React from "react";

const AboutUser = (props) => {
    return (
        <div className={style.profile__content}>
            <p>Name: {props.profile.fullName}</p>
            <p>About me: {props.profile.aboutMe}</p>
            <p>I'm find job: {props.profile.lookingForAJob? 'Yes': 'No'}</p>
            <p>Link: <a href='https://webarcticfox.ru/'>webarcticfox.ru</a></p>
            <br />
            <p>My social link:</p>
            {props.profile.contacts.facebook? <p>My Facebook: <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></p>:''}
            {props.profile.contacts.website? <p>My website: <a href={props.profile.contacts.website}>{props.profile.contacts.website}</a></p>:''}
            {props.profile.contacts.vk? <p>My Facebook: <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></p>:''}
            {props.profile.contacts.twitter? <p>My twitter: <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></p>:''}
            {props.profile.contacts.instagram? <p>My instagram: <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></p>:''}
            {props.profile.contacts.youtube? <p>My youtube: <a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></p>:''}
            {props.profile.contacts.github? <p>My github: <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></p>:''}
            {props.profile.contacts.mainLink? <p>My E-mail: <a href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a></p>:''}
        </div>
    )
}

export default AboutUser;