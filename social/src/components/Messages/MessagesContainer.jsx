import {sendMessage, updateMessageText} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesUsers: state.messagesPage.messagesUsers,
        messagesArray: state.messagesPage.messagesArray,
        currentMessageText: state.messagesPage.currentMessageText
    }
}

const MessagesContainer = connect(mapStateToProps, {sendMessage, updateMessageText})(Messages);

export default MessagesContainer;