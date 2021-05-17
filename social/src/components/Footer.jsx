import React from "react";
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer} id="site-footer">
            <div className={style.container}>
                <div className={style.page_title}>
                    <h6>WebArcticFox</h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer;