import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesUsers: state.messagesPage.messagesUsers,
        messagesArray: state.messagesPage.messagesArray,
        currentMessageText: state.messagesPage.currentMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;