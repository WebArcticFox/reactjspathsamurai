import React from "react";
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.top_header_thumb}>
                    <img src='https://webmandry.com/wp-content/uploads/2013/10/2013_10_962_03.jpg' />
                </div>
                <div className={style.profile__content}>
                    <p>Name: Alexander Kravchenko</p>
                    <p>Age: 27</p>
                    <p>Link: <a href='https://webarcticfox.ru/'>webarcticfox.ru</a></p>
                    <p>Location: Polotsk, Belarus</p>
                </div>
                <div className={style.profile__posts}>
                    <div className={style.profile__posts_item}>
                        <p className={style.profile__posts_item_auth}>Post 1</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>
                    </div>
                    <div className={style.profile__posts_item}>
                        <p className={style.profile__posts_item_auth}>Post 2</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;