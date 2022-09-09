import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Reviews from './Components/Reviews';
import Stories from './Components/Stories';
import Mentors from './Components/Mentors';
import Support from './Components/Support';
import { Route, Routes } from "react-router-dom";
// import {useState, useEffect} from 'react';

function App() {
  return (
    <div>
    <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/mentors" element={<Mentors />} /> 
        <Route path="/support" element={<Support/>} /> 
      </Routes> 
      <Footer />
    </div> 
  );
}

export default App;
