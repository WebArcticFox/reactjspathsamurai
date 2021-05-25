import React from "react";
import style from "./Login.module.css"
import Background from "../../assets/images/landing_users.png"

let Login = () => {
    return(
        <div className={style.content_bg_wrap} style={{backgroundImage: `url(${Background})`}}>
            <div className={style.welcome_text}>
                <h1>Welcome to the React Social<br />From React.JS Samurai Path</h1>
            </div>
        </div>
    )
}

export default Login