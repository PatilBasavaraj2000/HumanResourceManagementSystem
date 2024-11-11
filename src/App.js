import React from "react";
import "./components/Navbar.css"; // Import CSS for Navbar component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Dashboard from "./components/Dashboard";
//import Employees from "./components/Employees";
// import EmployeeDetails from "./components/EmployeeDetails";
// import Attendance from "./components/Attendance";
// import Payroll from "./components/Payroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./components/Features";
import "./App.css";

function App() {
  return (
    
    
      <div className="App">
        <Navbar/>
        <Home></Home>
        <Features></Features>
        <Contact></Contact>
        <About>
        <Router>
      <Routes>
       
        <Route path="/" element={<Home />}/>
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router></About>
       
      
        
      </div>
    
  );
}

export default App;
