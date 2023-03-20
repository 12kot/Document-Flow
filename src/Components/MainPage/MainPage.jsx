import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainPage.module.css";
import mainBanner from "./../../Common/Images/mainBanner.jpg";

const MainPage = (props) => {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.grid}`}>
        <div>
          <div className={`${styles.slogan}`}>
            <h1>
              Никитоша диск
              <br />
              для самого важного
            </h1>
          </div>
          <div className={`${styles.slogan1}`}>
            <p>
              Вы можете хранить и передавать коллегам файлы и папки, а также
              работать над ними вместе с другими пользователями на компьютере
              или мобильном устройстве.
            </p>
          </div>
          <div className={`${styles.logButton}`}>
            <NavLink to="/login" className={`${styles.floating_button}`}>
              Начать пользоваться
            </NavLink>
          </div>
          <div className={`${styles.logButton}`}>
            <NavLink to="/disk" className={`${styles.floating_button}`}>
              Открыть диск
            </NavLink>
          </div>
        </div>
        <div className={`${styles.grid_img}`}>
          <img src={mainBanner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
