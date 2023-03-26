import React from "react";
import { connect } from "react-redux";
import {
  changeSearchText,
  changeSortText,
  addFile,
} from "../../Redux/diskReducer";
import DiskPage from "../DiskPage/Disk/DiskPage";

class diskPage extends React.Component {
  render = () => {
    return <DiskPage {...this.props} />;
  };
}

let mapStateToProps = (store) => {
  return {
    typeOfSort: store.disk.typeOfSort,
    searchText: store.disk.searchText,
    userFiles: store.disk.currentUser.files,
    isLogin: store.disk.currentUser.isLogin,

    haveError: store.auth.haveError,
  };
};

export default connect(mapStateToProps, {
  changeSearchText,
  changeSortText,
  addFile,
})(diskPage);
