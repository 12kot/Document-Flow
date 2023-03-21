import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Components/AuthPages/LoginPage/LoginPage";
import RegisterPage from "./Components/AuthPages/RegisterPage/RegisterPage";

const App = (props) => {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Routes>
          <Route className="mainPage" path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
