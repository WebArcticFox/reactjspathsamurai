import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import StoreContext from "../../storeContext";


const MessagesContainer = (props) => {



    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    }

                    let updateMessageText = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text))
                    }
                    return (
                        <Messages messagesUsers={state.messagesPage.messagesUsers} messagesArray={state.messagesPage.messagesArray} currentMessageText={state.messagesPage.currentMessageText} sendMessage={sendMessage} updateMessageText={updateMessageText} />
                    )
                }
            }
        </StoreContext.Consumer>
    )

}

export default MessagesContainer;