import Sidebar from "./Sidebar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        friendList: state.sideBar.friends
    }
}

const SidebarContainer = connect(mapStateToProps,{})(Sidebar)

export default SidebarContainer;