import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND PARTICLES / GLOW LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="bg-particles"></div>
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="relative z-10 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
