import React from "react";
import { connect } from "react-redux";
import {
  changeSearchText,
  changeSortText,
  setDocuments,
} from "../../Redux/diskReducer";
import DiskPage from "../DiskPage/DiskPage";

class diskPage extends React.Component {
  componentDidMount = () => {
    this.props.setDocuments(this.props.currentUserDocuments);
  };

  render = () => {
    return <DiskPage {...this.props} />;
  };
}

let mapStateToProps = (store) => {
  return {
    typeOfSort: store.disk.typeOfSort,
    searchText: store.disk.searchText,
    documents: store.disk.documents,
    isLogin: store.auth.currentUser.isLogin,
    haveError: store.auth.haveError,
    currentUserDocuments: store.auth.currentUser.documents,
  };
};

export default connect(mapStateToProps, {
  changeSearchText,
  changeSortText,
  setDocuments,
})(diskPage);
