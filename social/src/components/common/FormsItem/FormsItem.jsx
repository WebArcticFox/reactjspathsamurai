import React from "react";
import style from "./FormsItem.module.css";

const FormControl = ({input, meta, element, ...props}) => {
    const hasError = meta.touched && meta.error;
    const NewElement = element;
    return (
        <div className={style.item_form+" "+(hasError ? style.error : "")}>
            <div>
                <NewElement {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = (props) => <FormControl {...props} element={"input"} />

export const TextArea = (props) => <FormControl {...props} element={"input"} />