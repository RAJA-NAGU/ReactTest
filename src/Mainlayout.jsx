import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Policies from "./Policies";
import Contact from "./Contact";
import Submittedcontact from "./submittedcontact";

import ContactDetails from "./Contactdetails";
import Editcontact from "./Editcontact";

function Mainlayout() {
  return (
    <main className="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policies />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/submittedcontact" element={<Submittedcontact />} />

        <Route path="/submittedcontact/:id" element={<ContactDetails />} />
        <Route path="/submittedcontact/editcontact/:id" element={<Editcontact/>}/>

      </Routes>
    </main>
  );
}

export default Mainlayout;
