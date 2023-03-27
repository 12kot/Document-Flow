import React from "react";
import { connect } from "react-redux";
import {
  changeEmailText,
  changePasswordText,
  loginUser,
} from "../../../Redux/authReducer";
import { setCurrentUser } from "../../../Redux/diskReducer";
import LoginPage from "./LoginPage";

class loginPage extends React.Component {
  componentDidMount = () => {
    this.props.setCurrentUser(this.props.currentUser);
  };

  render = () => {
    return (
      <LoginPage
        {...this.props}
      />
    );
  };
}

let mapStateToProps = (store) => {
  //store.disk.currentUser = {...store.auth.currentUser};

  return {
    emailText: store.auth.changeEmailText,
    passwordText: store.auth.changePasswordText,
    haveError: store.auth.haveError,
    currentUser: store.auth.currentUser,

    isLogin: store.disk.currentUser.isLogin,
  };
};

export default connect(mapStateToProps, {
  changeEmailText,
  changePasswordText,
  loginUser,
  setCurrentUser,
})(loginPage);
