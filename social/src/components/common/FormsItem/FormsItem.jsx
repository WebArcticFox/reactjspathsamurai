import React from "react";
import style from "./FormsItem.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta, element, ...props}) => {
    const hasError = meta.touched && meta.error;
    const NewElement = element;
    return (
        <div className={style.item_form+" "+(hasError ? style.error : "")}>
            <div>
                <NewElement {...input} {...props} />
            </div>
            { hasError && <span className={style.error_span}>{meta.error}</span> }
        </div>
    )
}

export const Input = (props) => <FormControl {...props} element={"input"} />

export const TextArea = (props) => <FormControl {...props} element={"input"} />

export const createField = (placeholder, name, validators, component, type, text='') => (
    <div><Field placeholder={placeholder} name={name} component={component} type={type} validate={validators} />{text}</div>
)