let store = {
    _state :{
        profilePage: {
            postArray: [
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
            ],
            newPostText: ''
        },
        messagesPage: {
            messagesArray: [
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
                }
            ],
            messagesUsers: [
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
                }
            ],
            currentMessageText: ''
        },
        sideBar: {
            friends: [
                {
                    userId: 1,
                    userImage: 'https://st.fl.ru/users/na/nadezhdaNade/foto/f_1455b7479a7e07ac.jpg',
                    userName: 'Diana'
                },
                {
                    userId: 2,
                    userImage: 'https://st.fl.ru/users/ka/kate-seo/foto/f_3726045b60cd904f.jpeg',
                    userName: 'Julia'
                },
                {
                    userId: 3,
                    userImage: 'https://st.fl.ru/users/Mi/Mihail_Kachan/foto/f_8095d9e1685c17b9.jpg',
                    userName: 'Michail'
                }
            ]
        }
    },
    _subscriber(){
        console.log('Not found subscribe')
    },
    setSubscribe(subscriber){
        this._subscriber = subscriber
    },
    getState() {
      return this._state
    },
    dispatch(action){ // {type: 'xxx'}
        if(action.type === 'ADD-POST'){
            let newPost = {
                postId: 5,
                postH1: 'Test',
                postText: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postArray.push(newPost)
            this._state.profilePage.newPostText = ''
            this._subscriber(this._state);
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newPostText
            this._subscriber(this._state);
        }else if (action.type === 'SEND-MESSAGE'){
            let newMessage = {
                messageId: 5,
                userImage: "https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg",
                textMessage: this._state.messagesPage.currentMessageText,
                messageStyle: 'message_for_people'
            }
            this._state.messagesPage.messagesArray.push(newMessage)
            this._state.messagesPage.currentMessageText = ''
            this._subscriber(this._state);
        }else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.messagesPage.currentMessageText = action.newMessageText
            this._subscriber(this._state);
        }

    }
}
window.store=store
export default store;