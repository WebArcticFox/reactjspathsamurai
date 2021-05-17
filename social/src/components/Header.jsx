import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header} id="site-header">
            <div className={style.container}>
                <div className={style.page_title}>
                    <h6>Profile Page</h6>
                </div>


                <div className={style.author_page}>
                    <a href="/profile" className={style.author_name}>
                        <div className={style.author_title}>
                            Alex
                        </div>
                        <span className={style.author_subtitle}>REACT COWBOY</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;