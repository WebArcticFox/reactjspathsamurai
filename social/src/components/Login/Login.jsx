import React from "react";
import style from "./Login.module.css"
import Background from "../../assets/images/landing_users.png"
import {Field, reduxForm} from "redux-form";
import {sendLogin} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Input} from "../common/FormsItem/FormsItem";
import {required} from "../../utils/validators/validators";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} /></div>
            <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} /></div>
            <div><Field placeholder={"Remember me"} component={"input"} name={"rememberMe"} type={"checkbox"} /> Remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


let Login = (props) => {
    return(
        <div className={style.content_bg_wrap} style={{backgroundImage: `url(${Background})`}}>
            <div className={style.welcome_text}>
                <h1>Welcome to the React Social<br />From React.JS Samurai Path</h1>
                <LoginReduxForm onSubmit={props.sendLogin} />
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps,{sendLogin})(Login)