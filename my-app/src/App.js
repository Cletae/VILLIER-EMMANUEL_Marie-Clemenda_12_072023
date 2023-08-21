import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profil from "./pages/Profil";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Profil />} />
        <Route exact path="/user/:id" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;