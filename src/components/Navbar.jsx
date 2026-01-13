import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import pattern from "../assets/pattern.png";

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
        className="relative z-40"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "220px",
          backgroundPosition: "center",
        }}
      >
        {/* SOFT OVERLAY (PATTERN VISIBLE) */}
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <img
            src={logo}
            alt="Logo"
            className="h-16 md:h-18 cursor-pointer drop-shadow-lg"
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-2 bg-black/55 backdrop-blur-xl p-2 rounded-full shadow-lg">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-full text-sm tracking-wide transition
                  ${
                    pathname === link.path
                      ? "bg-[#f3b26a] text-black font-semibold"
                      : "text-[#f3b26a] hover:bg-white/10"
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
            <span className="w-6 h-[2px] bg-[#f3b26a]"></span>
            <span className="w-6 h-[2px] bg-[#f3b26a]"></span>
            <span className="w-6 h-[2px] bg-[#f3b26a]"></span>
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
          backgroundSize: "220px",
        }}
      >
        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"></div>

        {/* HEADER */}
        <div className="relative flex justify-between items-center px-6 py-4 border-b border-white/10">
          <img src={logo} className="h-14" />
          <button
            className="text-[#f3b26a] text-3xl"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        {/* MENU */}
        <div className="relative flex flex-col items-center justify-center h-full gap-8 text-lg tracking-widest">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`transition ${
                pathname === link.path
                  ? "text-[#f3b26a] font-semibold"
                  : "text-white/80 hover:text-[#f3b26a]"
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
