import style from "./ProfileStatus.module.css";
import React, {useState} from "react";

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [textValue, setTextValue] = useState(props.status)


    const onEditMode = () => {
        setEditMode(true)
    }

    const offEditMode = () => {
        setEditMode(false)
        props.updateStatus(textValue)
    }

    return (
        <div className={style.profile__content}>
            {!editMode
                ? <p className={style.status}
                     onDoubleClick={onEditMode}>{!props.status ? "Need set status" : props.status}</p>
                : <div className={style.comment_form}>
                    <div>
                        <input onChange={ (e)=> setTextValue(e.currentTarget.value)} autoFocus={true} onBlur={offEditMode}
                               className={style.comment_form__text_area} value={textValue}/>
                    </div>
                </div>
            }
        </div>
    )

}

export default ProfileStatusHooks;

