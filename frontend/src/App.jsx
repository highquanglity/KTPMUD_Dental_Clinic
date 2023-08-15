import "./Grid.css";
import "./App.css";

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
