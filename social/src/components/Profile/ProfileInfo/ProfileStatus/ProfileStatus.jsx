import style from "./ProfileStatus.module.css";
import React from "react";

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status!==this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    render() {
        return (
            <div className={style.profile__content}>
                {!this.state.editMode
                    ?<p className={style.status} onDoubleClick={ this.activateEditMode }>{!this.props.status?"Need set status":this.props.status}</p>
                    :<div className={style.comment_form}>
                        <div>
                            <input onChange={ this.onStatusChange } autoFocus={true} onBlur={ this.deActivateEditMode } className={style.comment_form__text_area} value={this.state.status} />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;

