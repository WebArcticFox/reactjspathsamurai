import React from 'react';
import preloader_svg from "../../../assets/images/preloader.svg";
import style from "./Preloader.module.css";

let Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={preloader_svg} alt='' />
        </div>
    )
}

export default Preloader