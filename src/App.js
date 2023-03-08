import './App.css';
import React from "react";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Routes/Home.js";
import About from "./Routes/About.js";
import Project from "./Routes/Project.js";
import Contact from "./Routes/Contact.js";

function App() {
  return (
    <div>
           <BrowserRouter>
                <Routes>

                        <Route path="/" element={<Home/>}>Home</Route>
                        <Route path="/About" element={<About/>}>About</Route>
                        <Route path="/Project" element={<Project/>}>Project</Route>
                        <Route path="/Contact" element={<Contact/>}>Contact</Route>

                </Routes>
           </BrowserRouter>
    </div>
  );
}

export default App;
