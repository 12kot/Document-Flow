import React from "react";
import { connect } from "react-redux";
import RegisterPage from "./RegisterPage";
import {
  changePasswordText,
  changeEmailText,
  changeRepeatPasswordText,
  registerUser,
} from "../../../Redux/authReducer";

class registerPage extends React.Component {
  render = () => {
    return <RegisterPage {...this.props} />;
  };
}

let mapStateToProps = (store) => {
  return {
    emailText: store.auth.changeEmailText,
    passwordText: store.auth.changePasswordText,
    repeatPasswordText: store.auth.repeatPasswordText,
    haveError: store.auth.haveError,
    isLogin: store.auth.currentUser.isLogin,
  };
};

export default connect(mapStateToProps, {
  changeEmailText,
  changePasswordText,
  changeRepeatPasswordText,
  registerUser,
})(registerPage);
