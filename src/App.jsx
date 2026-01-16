import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DJBackground from "./components/DJBackground";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* DJ BACKGROUND */}
      <DJBackground />

      {/* CONTENT LAYER */}
      <div className="relative z-10">

        <Navbar />

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </div>
  );
}
