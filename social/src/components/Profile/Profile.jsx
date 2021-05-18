import React from "react";
import style from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.top_header_thumb}>
                    <img src='https://webmandry.com/wp-content/uploads/2013/10/2013_10_962_03.jpg' />
                </div>
                <div className={style.top_header_author}>
                    <img className={style.author_thumb} src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                    <div className={style.author_content}>
                        <p className={style.author_name}>Alexander Kravchenko</p>
                        <div className={style.country}>San Francisco, CA</div>
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.profile__content}>
                    <p>Name: Alexander Kravchenko</p>
                    <p>Age: 27</p>
                    <p>Link: <a href='https://webarcticfox.ru/'>webarcticfox.ru</a></p>
                    <p>Location: Polotsk, Belarus</p>
                </div>
            </div>
            <div className={style.content}>
                <Posts />
            </div>
        </div>
    )
}

export default Profile;