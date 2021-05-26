import {sendMessage, updateMessageText} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        messagesUsers: state.messagesPage.messagesUsers,
        messagesArray: state.messagesPage.messagesArray,
        currentMessageText: state.messagesPage.currentMessageText
    }
}


export default connect(mapStateToProps, {sendMessage, updateMessageText})(withAuthRedirect(Messages));