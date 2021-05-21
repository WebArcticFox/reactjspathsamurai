import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} sendPost={store.sendPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} sendMessage={store.sendMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState());

store.setSubscribe(rerenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
