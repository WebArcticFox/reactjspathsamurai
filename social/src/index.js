import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {sendMessage, sendPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} sendPost={sendPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(state);

subscribe(rerenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
