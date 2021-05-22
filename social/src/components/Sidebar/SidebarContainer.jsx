import React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        friendList: state.sideBar.friends
    }
}
let mapDispatchToProps = (dispatch) => {

}

const SidebarContainer = connect(mapStateToProps,mapDispatchToProps)(Sidebar)

export default SidebarContainer;