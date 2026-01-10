import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Menu", path: "/menu" },
    { name: "Booking", path: "/booking" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <img src={logo} alt="Logo" className="h-10 md:h-12" />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-2 bg-white/10 backdrop-blur-xl p-2 rounded-full">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm tracking-wide transition
                  ${
                    pathname === link.path
                      ? "bg-gold text-black"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(true)}
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-2xl z-50 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <img src={logo} className="h-10" />
          <button
            className="text-white text-3xl"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-8 text-lg tracking-wide">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`transition ${
                pathname === link.path
                  ? "text-gold"
                  : "text-white/80 hover:text-gold"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
