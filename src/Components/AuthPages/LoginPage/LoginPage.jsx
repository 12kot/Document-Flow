import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../UI/Buttons/Buttons";
import Input from "../../UI/Inputs/Input";
import styles from "../Auth.module.css";

const LoginPage = () => {
  return (
    <div className={`${styles.page}`}>
      <div className={`${styles.loginPage}`}>
        <h3>LoginPage</h3>
        <div className={styles.inputs}>
          <Input margin={styles.inp} text="Email" />
          <Input margin={styles.inp} text="Password" />

          <div>
            <Button size={styles.button} path="disk" text="Log In" />
          </div>
          <div className={`${styles.register}`}>
            <span>Ещё не зарегестрированы?</span><br />
            <NavLink to="/register">Sign In</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
