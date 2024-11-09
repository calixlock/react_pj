import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
