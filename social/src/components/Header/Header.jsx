import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header} id="site-header">
            <div className={style.container}>
                <div className={style.page_title}>
                    <h6>React Social Project</h6>
                </div>
                {props.isAuth?<div className={style.author_page}>
                    <NavLink to="/profile/" className={style.author_name}>
                        <div className={style.author_title}>
                            {props.login}
                        </div>
                        <span className={style.author_subtitle}>REACT COWBOY</span>
                    </NavLink>
                </div>:<NavLink to="/login" className={style.login_user}>Login</NavLink>}


            </div>
        </header>
    )
}

export default Header;