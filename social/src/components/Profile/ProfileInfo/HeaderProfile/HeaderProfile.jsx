import style from "./HeaderProfile.module.css";
import React from "react";

const HeaderProfile = () => {
    return(
        <div>
            <div className={style.top_header_thumb}>
                <img src='https://webmandry.com/wp-content/uploads/2013/10/2013_10_962_03.jpg' />
            </div>
            <div className={style.top_header_author}>
                <img className={style.author_thumb} src="https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg" alt="author" />
                <div className={style.author_content}>
                    <p className={style.author_name}>Alexander Kravchenko</p>
                    <div className={style.country}>Polotsk, Belarus</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderProfile;