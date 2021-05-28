import {sendMessage} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesUsers: state.messagesPage.messagesUsers,
        messagesArray: state.messagesPage.messagesArray,
    }
}


export default compose(
    connect(mapStateToProps, {sendMessage})
)(Messages);