import React from "react";
import {connect} from "react-redux";
import App from "./App";
import {setAuthUserData} from "./redux/authReducer";
import {authAPI} from "./api/api";

class AppContainer extends React.Component{
    componentDidMount() {
        authAPI.authMe().then(data => {
            if(data.resultCode===0) {
                let {id, login, email} = data.data
                this.props.setAuthUserData(id,login,email)
            }
        })
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

export default connect(mapStateToProps,{setAuthUserData})(AppContainer);
