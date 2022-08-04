import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import BuyPage from "./components/BuyPage";
import RentPage from "./components/RentPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import NewListing from "./components/NewListing";
import {Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/buy" element={<BuyPage/>} />
        <Route path="/rent" element={<RentPage/>} />
        <Route path="/createListing" element={<NewListing/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
