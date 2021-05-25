import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    render(){
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);