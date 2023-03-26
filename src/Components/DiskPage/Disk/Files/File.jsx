import React from "react";
import styles from "./File.module.css";

const File = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <div className={styles.item}>Icon</div>
        <div className={styles.item}>Name</div>
      </div>
      <div className={styles.item}>Time</div>
      <div className={styles.item}>Actions</div>
    </div>
  );
};

export default File;
