import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav.js";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/Home" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
