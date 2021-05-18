import style from "./AboutUser.module.css";
import React from "react";

const AboutUser = () => {
    return (
        <div className={style.profile__content}>
            <p>Name: Alexander Kravchenko</p>
            <p>Age: 27</p>
            <p>Link: <a href='https://webarcticfox.ru/'>webarcticfox.ru</a></p>
            <p>Location: Polotsk, Belarus</p>
        </div>
    )
}

export default AboutUser;