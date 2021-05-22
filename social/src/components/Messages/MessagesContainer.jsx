import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {
    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let updateMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return <Messages messagesUsers={state.messagesPage.messagesUsers} messagesArray={state.messagesPage.messagesArray} currentMessageText={state.messagesPage.currentMessageText} sendMessage={sendMessage} updateMessageText={updateMessageText} />
}

export default MessagesContainer;