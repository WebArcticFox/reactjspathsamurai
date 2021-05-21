let rerenderTree = () => {
    console.log('State changed');
}

let state = {
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

}

window.state = state;

export const sendPost = () => {
    let newPost = {
        postId: 5,
        postH1: 'Test',
        postText: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.postArray.push(newPost)
    state.profilePage.newPostText = ''
    rerenderTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderTree(state);
}

export const sendMessage = () => {
    let newMessage = {
        messageId: 5,
        userImage: "https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg",
        textMessage: state.messagesPage.currentMessageText,
        messageStyle: 'message_for_people'
    }
    state.messagesPage.messagesArray.push(newMessage)
    state.messagesPage.currentMessageText = ''
    rerenderTree(state);
}

export const updateNewMessageText = (newText) => {
    state.messagesPage.currentMessageText = newText
    rerenderTree(state);
}

export const subscribe = (observer) => {
    rerenderTree = observer
}

export default state;