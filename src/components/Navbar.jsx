import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import pattern from "../assets/pattern.png"; // 🔥 background pattern image

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
      <nav
        className="relative z-40 border-b border-black/20"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO BIG */}
          <img
            src={logo}
            alt="Logo"
            className="h-14 md:h-16 cursor-pointer"
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-2 bg-black p-2 rounded-full">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm tracking-wide transition
                  ${
                    pathname === link.path
                      ? "z-40 bg-[#f3b26a] text-black"
                      : "text-white hover:bg-black/10"
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
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          backgroundPosition: "center",
        }}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-black/20 bg-[#f3b26a]/90 backdrop-blur">
          <img src={logo} className="h-14" />
          <button
            className="text-black text-3xl"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        {/* MENU */}
        <div className="flex flex-col items-center gap-8 text-lg tracking-wide py-12 overflow-y-auto h-full bg-[#f3b26a]/90 backdrop-blur">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`transition ${
                pathname === link.path
                  ? "text-black font-semibold"
                  : "text-black/70 hover:text-black"
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
