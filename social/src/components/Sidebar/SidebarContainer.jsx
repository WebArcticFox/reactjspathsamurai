import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        friendList: state.sideBar.friends
    }
}

export default compose(
    connect(mapStateToProps,{})
)(Sidebar);