import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <span className={`${styles.item} ${styles.logo}`}>
        <NavLink to="/">LOGO</NavLink>
      </span>
      <div>
        <span className={styles.item}>
          <NavLink to="/login">Войти</NavLink>
        </span>
      </div>
    </header>
  );
};

export default Header;
