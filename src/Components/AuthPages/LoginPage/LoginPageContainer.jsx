import React from "react";
import { connect } from "react-redux";
import {
  changeEmailText,
  changePasswordText,
  loginUser,
} from "../../../Redux/authReducer";
import LoginPage from "./LoginPage";

class loginPage extends React.Component {
  render = () => {
    return (
      <LoginPage
        {...this.props}
      />
    );
  };
}

let mapStateToProps = (store) => {
  return {
    emailText: store.auth.changeEmailText,
    passwordText: store.auth.changePasswordText,
    isLogin: store.auth.currentUser.isLogin,
  };
};

export default connect(mapStateToProps, {
  changeEmailText,
  changePasswordText,
  loginUser,
})(loginPage);
