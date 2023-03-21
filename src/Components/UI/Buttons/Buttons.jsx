import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Button.module.css"

const Button = (props) => {
  return (
    <div className={`${styles.logButton}`}>
      <NavLink to={props.path} className={`${styles.floating_button} ${props.size}`}>
        {props.text}
      </NavLink>
    </div>
  );
};

export default Button;
