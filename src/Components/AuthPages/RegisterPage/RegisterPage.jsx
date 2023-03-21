import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../UI/Buttons/Buttons";
import Input from "../../UI/Inputs/Input";
import styles from "../Auth.module.css";

const RegisterPage = () => {
  return (
    <div className={`${styles.page}`}>
      <div className={`${styles.loginPage}`}>
        <h3>Registration</h3>
        <div className={styles.inputs}>
          <Input margin={styles.inp} text="Email" />
          <Input margin={styles.inp} text="Password" />
          <Input margin={styles.inp} text="Repeat Password" />

          <div>
            <Button size={styles.button} path="disk" text="Register" />
          </div>
          <div className={`${styles.register}`}>
            <span>Уже зарегестрированы?</span>
            <br />
            <NavLink to="/login">Log in</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
