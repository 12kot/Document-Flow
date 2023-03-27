import React from "react";
import styles from "./File.module.css";

const File = (props) => {
  let getDate = () => {
    let date = new Date(props.file.lastModified);
    return `${date.toDateString()}`;
  }

  return (<div className={styles.cont}>
    <a href={props.path} className={styles.container} download>
      <div className={styles.name}>
        <div className={styles.item}>Icon</div>
        <div className={styles.item}>{props.file.name}</div>
      </div>
      <div className={styles.item}>{getDate()}</div>
      <div className={styles.item}>Actions</div>
    </a>
    </div>
  );
};

export default File;
