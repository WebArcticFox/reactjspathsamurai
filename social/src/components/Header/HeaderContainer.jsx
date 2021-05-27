import React from "react";
import Header from "./Header";
import {setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps,{setAuthUserData})
)(HeaderContainer);