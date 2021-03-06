import React from "react";
import "./assets/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import AboutUs from "./pages/AboutUs";
import Nav from "./components_Fathers/Nav";
import Footer from "./components_Fathers/Footer";

const App = () => {
  return (
    <div className="appDivContainer">
      <div className="appDivContainerBody">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div >
  );
};

export default App;
