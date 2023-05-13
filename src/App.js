import React from "react";
import './style.css';
import Home from "./pages/Home";
import TimerPage from "./pages/TimerPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/timer" element={<TimerPage />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
