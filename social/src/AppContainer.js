import React from "react";
import {connect} from "react-redux";
import App from "./App";
import {getMyAuth} from "./redux/authReducer";

class AppContainer extends React.Component{
    componentDidMount() {
        this.props.getMyAuth()
    }

    render(){
        return (
            <App {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{getMyAuth})(AppContainer);
