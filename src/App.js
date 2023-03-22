import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import React from "react";
import Footer from "./Components/Footer/Footer";
import RegisterPageContainer from "./Components/AuthPages/RegisterPage/RegisterPageContainer";
import LoginPageContainer from "./Components/AuthPages/LoginPage/LoginPageContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className="App">
      <div className="content">
        <HeaderContainer />
        <Routes>
          <Route className="mainPage" path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPageContainer />} />
          <Route path="/register" element={<RegisterPageContainer />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
