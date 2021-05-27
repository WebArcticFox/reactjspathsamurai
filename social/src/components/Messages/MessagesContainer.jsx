import {sendMessage, updateMessageText} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesUsers: state.messagesPage.messagesUsers,
        messagesArray: state.messagesPage.messagesArray,
        currentMessageText: state.messagesPage.currentMessageText
    }
}


export default compose(
    connect(mapStateToProps, {sendMessage, updateMessageText}),
    withAuthRedirect
)(Messages);