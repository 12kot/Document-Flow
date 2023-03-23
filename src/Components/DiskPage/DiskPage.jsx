import React from "react";
import Input from "../UI/Inputs/Input";
import SelectForm from "../UI/SelectForm/SelectForm";
import UploadForm from "../UI/UploadForm/UploadForm";
import styles from "./DiskPage.module.css";
import { Navigate } from "react-router-dom";

const DiskPage = (props) => {
  if (props.haveError || !props.isLogin)
    return <Navigate to="/login" />
  
  return (
    <div className={styles.container}>
      <div className={styles.activeContainer}>
        <span className={styles.search}>
          <Input
            text="Search"
            type="text"
            color={styles.color}
            margin={styles.inputStyle}
            changeText={props.changeSearchText}
            currentText={props.searchText}
          />
        </span>
        <span className={styles.sort}>
          <SelectForm
            changeText={props.changeSortText}
            typeOfSort={props.typeOfSort}
          />
        </span>
      </div>

      <div className={styles.addFile}>
        <UploadForm />
      </div>
      <div>
        <h2>Ваши файлы</h2>
      </div>
    </div>
  );
};

export default DiskPage;
