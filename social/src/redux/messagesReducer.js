const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                messageId: 5,
                userImage: "https://st.fl.ru/users/he/heikun/foto/f_293609fee65839c2.jpeg",
                textMessage: state.currentMessageText,
                messageStyle: 'message_for_people'
            }
            state.messagesArray.push(newMessage)
            state.currentMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.currentMessageText = action.newMessageText
            return state
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default messagesReducer;