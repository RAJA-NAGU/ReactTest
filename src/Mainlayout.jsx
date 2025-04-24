import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Policies from "./Policies";
import Contact from "./Contact";

function Mainlayout() {
  return (
    <main className="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default Mainlayout;
