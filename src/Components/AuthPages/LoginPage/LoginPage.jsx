import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import Button from "../../UI/Buttons/Buttons";
import Input from "../../UI/Inputs/Input";
import styles from "../Auth.module.css";

const LoginPage = (props) => {
  if (!props.haveError && props.isLogin)
    return <Navigate to="/disk" />
  
  return (
    <div className={`${styles.page}`}>
      <div className={`${styles.loginPage}`}>
        <h3>LoginPage</h3>
        <div className={styles.inputs}>
          <Input
            margin={styles.inp}
            color={styles.color}
            currentText={props.emailText}
            changeText={props.changeEmailText}
            text="Nickname"
            type="text"
          />
          <Input
            margin={styles.inp}
            color={styles.color}
            currentText={props.passwordText}
            changeText={props.changePasswordText}
            text="Password"
            type="password"
          />

          <div>
            <Button size={styles.button} action={props.loginUser} path="/login" text="Log In" />
          </div>
          <div className={`${styles.register}`}>
            <span>Ещё не зарегестрированы?</span>
            <br />
            <NavLink to="/register">Sign In</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
