import "./Grid.css";
import "./App.css";

// import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage";
import ServicePage from "./components/ServicePage";
import DentistPage from "./components/DentistPage";
import AdvisePage from "./components/AdvisePage";
import PatientPage from "./components/PatientPage";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/home" element={<LandingPage />}></Route>
        <Route path="/service" element={<ServicePage />}></Route>
        <Route path="/dentist" element={<DentistPage />}></Route>
        <Route path="/advise" element={<AdvisePage />}></Route>
        <Route path="/patient" element={<PatientPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
