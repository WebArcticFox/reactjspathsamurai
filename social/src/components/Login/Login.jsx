import React from "react";
import style from "./Login.module.css"
import Background from "../../assets/images/landing_users.png"
import {reduxForm} from "redux-form";
import {sendLogin} from "../../redux/authReducer";
import {connect} from "react-redux";
import {createField, Input} from "../common/FormsItem/FormsItem";
import {required} from "../../utils/validators/validators";
import styleForm from "../common/FormsItem/FormsItem.module.css"

let LoginForm = ({handleSubmit, error, reset}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email","email",[required],Input,'text')}
            {createField("Password","password",[required],Input,'password')}
            {createField(null,"rememberMe",[],Input,'checkbox', "Remember me")}
            {error && <div className={styleForm.all_form_error}>
                {error}
            </div>}
            <div><button>Login</button></div>
            <div><button onClick={reset}>Clear form</button> </div>
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