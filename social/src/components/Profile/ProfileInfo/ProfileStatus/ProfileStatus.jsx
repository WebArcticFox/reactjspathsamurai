import style from "./ProfileStatus.module.css";
import React from "react";

class ProfileStatus extends React.Component{
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div className={style.profile__content}>
                {!this.state.editMode
                    ?<p onDoubleClick={ this.activateEditMode }>{this.props.status}</p>
                    :<div className={style.comment_form}>
                        <div>
                            <input autoFocus={true} onBlur={ this.deActivateEditMode } className={style.comment_form__text_area} value={this.props.status}></input>
                        </div>
                        {/*<button className={style.comment_form__input}>Change status</button>*/}
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;

