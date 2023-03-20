import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = (props) => {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Routes>
          <Route className="mainPage" path="/" element={<MainPage />} />
          <Route
            className="loginPage"
            path="/login"
            element={<div>Login</div>}
          />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
