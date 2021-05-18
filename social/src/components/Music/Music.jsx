import React from "react";
import style from './Music.module.css';
import SpotifyPlayer from 'react-spotify-player';

const size = {
    width: '100%',
    height: 700,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

const Music = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.music_from}>
                    <SpotifyPlayer
                        uri="spotify:album:10v912xgTZbjAtYfyKWJCS"
                        size={size}
                        view={view}
                        theme={theme}
                    />
                </div>
            </div>
        </div>
    )
}

export default Music;