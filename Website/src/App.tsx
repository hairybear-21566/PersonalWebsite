import React from 'react';
//import logo from './logo.svg';

import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

import {Projects, Landing, Blog, Contact, About} from './Components/Pages/index';
import {Navbar} from "./Components/Pages/Parts/index";

function App() {
  //<Route path="*" element={<Projects />} />
  return (
<>
<Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/projects" element={<Projects />}/>
      <Route path="/blog" element={<Blog />} />
      <Route path="/contactme" element={<Contact />} />
      <Route path="/aboutme" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
