import React from "react";
import { connect } from "react-redux";
import Header from "./Header/Header";
import { logOutUser } from "../../Redux/authReducer";

class header extends React.Component {
    render = () => {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (store) => {
    return {
        isLogin: store.auth.currentUser.isLogin,
        email: store.auth.currentUser.email,
    }
}

export default connect(mapStateToProps, {logOutUser})(header);