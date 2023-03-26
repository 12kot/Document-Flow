import React from "react";
import { connect } from "react-redux";
import {
  changeSearchText,
  changeSortText,
  setUserFiles,
} from "../../Redux/diskReducer";
import DiskPage from "../DiskPage/Disk/DiskPage";

class diskPage extends React.Component {
  componentDidMount = () => {
    this.props.setUserFiles(this.props.currentUserFiles);
  };

  render = () => {

    return <DiskPage {...this.props} />;
  };
}

let mapStateToProps = (store) => {
  return {
    typeOfSort: store.disk.typeOfSort,
    searchText: store.disk.searchText,
    userFiles: store.disk.userFiles,
    
    currentUserFiles: store.auth.currentUser.files,
    isLogin: store.auth.currentUser.isLogin,
    haveError: store.auth.haveError,
    
  };
};

export default connect(mapStateToProps, {
  changeSearchText,
  changeSortText,
  setUserFiles,
})(diskPage);
