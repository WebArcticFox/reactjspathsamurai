const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {
    let copyState = {}
    switch (action.type) {
        case SEND_MESSAGE:
            copyState = {
                ...state,
                messagesArray: [...state.messagesArray]
            }
            let newMessage = {
                messageId: 5,
                userImage: "https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg",
                textMessage: state.currentMessageText,
                messageStyle: 'message_for_people'
            }
            copyState.messagesArray.push(newMessage)
            copyState.currentMessageText = ''
            return copyState
        case UPDATE_NEW_MESSAGE_TEXT:
            copyState = {...state}
            copyState.currentMessageText = action.newMessageText
            return copyState
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default messagesReducer;