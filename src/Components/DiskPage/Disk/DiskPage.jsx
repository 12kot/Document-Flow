import React from "react";
import Input from "../../UI/Inputs/Input";
import SelectForm from "../../UI/SelectForm/SelectForm";
import UploadForm from "../../UI/UploadForm/UploadForm";
import styles from "./DiskPage.module.css";
import { Navigate } from "react-router-dom";
import File from "./Files/File";

const DiskPage = (props) => {
  if (props.haveError || !props.isLogin)
    return <Navigate to="/login" />
  
  let getFiles = () => {
    if(props.userFiles.length === 0) return "Файлы отсутствуют"
    return props.userFiles.map((file) => { return (<File />) })
  } 

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
        {getFiles()}
      </div>
    </div>
  );
};

export default DiskPage;