import React from "react";
import styles from "./Input.module.css"

const Input = (props) => {
    return (<div
        className={`${styles.form__group} ${styles.field} ${props.margin}`}
    >
        <input
            required=""
            placeholder={props.text}
            className={styles.form__field}
            type="input"
        />
        <label className={styles.form__label} for={props.text}>
            {props.text}
        </label>
    </div>);
}

export default Input;