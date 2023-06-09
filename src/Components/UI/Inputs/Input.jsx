import React from "react";
import styles from "./Input.module.css"

const Input = (props) => {
    let updateTextRef = React.createRef();
    let updateText = () => {
        props.changeText(updateTextRef.current.value);
    }

    return (<div
        className={`${styles.form__group} ${styles.field} ${props.margin}`}
    >
        <input
            onChange={updateText}
            ref={updateTextRef}
            value={props.currentText}
            required=""
            placeholder={props.text}
            className={`${styles.form__field} ${props.color}`}
            type={props.type}
            autoComplete="on"
        />
        <label className={styles.form__label} htmlFor={props.text}>
            {props.text}
        </label>
    </div>);
}

export default Input;