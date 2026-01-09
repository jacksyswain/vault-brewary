import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black sticky top-0 z-50">
      <img src={logo} className="h-10" />
      <div className="space-x-6 text-sm">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}
