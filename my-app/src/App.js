import React from "react";
import "./css/style.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
