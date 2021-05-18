import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let PostArray = [
    {
        postId: 1,
        postH1: 'My travel story',
        postText: 'Hi',
        likeCount: '28'
    },
    {
        postId: 1,
        postH1: 'My workout in Belarus',
        postText: 'It\'s my first post',
        likeCount: '13'
    }
]

let MessagesUsers = [
    {
        userId: 1,
        userImage: 'https://st.fl.ru/users/na/nadezhdaNade/foto/f_1455b7479a7e07ac.jpg',
        userName: 'Diana',
        lastMessage: 'Hi Alex! It’s Diana, I just wanted to let you know that we have to reschedule',
        lastMessageDate: '4 hours ago'
    },
    {
        userId: 2,
        userImage: 'https://st.fl.ru/users/ka/kate-seo/foto/f_3726045b60cd904f.jpeg',
        userName: 'Julia',
        lastMessage: 'Hi! Can you help me?',
        lastMessageDate: '1 day ago'
    },
    {
        userId: 3,
        userImage: 'https://st.fl.ru/users/Mi/Mihail_Kachan/foto/f_8095d9e1685c17b9.jpg',
        userName: 'Michail',
        lastMessage: 'Hello man! I can\'t get YouTube play for React',
        lastMessageDate: '2 days ago'
    },
]

let MessagesArray = [
    {
        messageId: 1,
        userImage: "https://st.fl.ru/users/na/nadezhdaNade/foto/f_1455b7479a7e07ac.jpg",
        textMessage: 'Hi James! It’s Diana, I just wanted to let you know that we have to reschedule',
        messageStyle: 'message_for_me'
    },
    {
        messageId: 2,
        userImage: "https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg",
        textMessage: 'Hi Diana! How are you?',
        messageStyle: 'message_for_people'
    },
    {
        messageId: 3,
        userImage: "https://st.fl.ru/users/na/nadezhdaNade/foto/f_1455b7479a7e07ac.jpg",
        textMessage: 'Alex, can you call me at Friday?',
        messageStyle: 'message_for_me'
    },
    {
        messageId: 4,
        userImage: "https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg",
        textMessage: 'Yeah, I can call you at Friday on 6-7 pm',
        messageStyle: 'message_for_people'
    },
]


ReactDOM.render(
  <React.StrictMode>
    <App PostArray={PostArray} MessagesArray={MessagesArray} MessagesUsers={MessagesUsers} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
