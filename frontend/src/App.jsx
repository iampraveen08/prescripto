import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import DoctorsCard from "./components/DoctorsCard";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import BottomContent from "./components/BottomContent";

// Page & Auth Imports
import AllDoctors from "./pages/AllDoctors";
import DoctorLogin from "./doctor/DoctorLogin";
import AdminLogin from "../../admin/src/component/AdminLogin";

// Static Data
import data from "./components/content.json";

// Styling
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Info />
              <DoctorsCard data={data} />
              <AboutUs />
              <BottomContent />
              <Footer />
            </>
          }
        />

        <Route
          path="/alldoctors"
          element={
            <>
              <Navbar />
              <AllDoctors />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          }
        />

        <Route path="/doctorlogin" element={<DoctorLogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
