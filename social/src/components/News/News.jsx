import React from "react";
import style from './News.module.css';
import YouTube from "react-youtube";

const opts = {
    height: '619px',
    width: '100%',
    playerVars: {
        autoplay: 1,
    },
};

const News = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.news_from}>
                    <YouTube videoId="lW07SN3YoLI" opts={opts} />
                </div>
            </div>
        </div>
    )
}

export default News;