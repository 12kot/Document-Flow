import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route className="mainPage" path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
