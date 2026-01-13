import React from "react";
import {
  FiMapPin,
  FiClock,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiYoutube
} from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import pattern from "../assets/pattern.png";

export default function Footer() {
  return (
    <footer
      className="relative text-black overflow-hidden"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px",
        backgroundPosition: "center",
        backgroundColor: "#f9cfa4",
      }}
    >
      {/* LIGHT OVERLAY SO PATTERN IS VISIBLE */}
      <div className="absolute inset-0 bg-[#f9cfa4]/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-10">

        {/* ===== ROW 1 ===== */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-8">

          {/* LOGO + ABOUT */}
          <div>
            <img src={logo} className="h-16 mb-2" />
            <p className="text-sm font-medium leading-relaxed md:hidden">
              Vault Brewery Hyderabad is a premium craft brewery known for nightlife,
              live music & unforgettable experiences.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="mt-12 md:mt-0">
            <h4 className="font-bold tracking-widest text-sm mb-3">
              QUICK LINKS
            </h4>
            <div className="space-y-2 text-sm font-medium">
              <Link to="/" className="block hover:underline">Home</Link>
              <Link to="/about" className="block hover:underline">About</Link>
              <Link to="/events" className="block hover:underline">Events</Link>
              <Link to="/menu" className="block hover:underline">Menu</Link>
              <Link to="/booking" className="block hover:underline">Booking</Link>
            </div>
          </div>

          {/* LOCATION */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <FiMapPin size={16} />
              <h4 className="font-bold tracking-widest text-sm">LOCATION</h4>
            </div>
            <p className="text-sm">
              Plot No. 644, Road No. 36,<br />
              Jubilee Hills, Hyderabad
            </p>
          </div>

          {/* TIMINGS */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <FiClock size={16} />
              <h4 className="font-bold tracking-widest text-sm">TIMINGS</h4>
            </div>
            <p className="text-sm">
              Sun–Thu: 12PM – 11:45PM<br />
              Fri–Sat: 12PM – 1AM
            </p>
          </div>

          {/* POLICIES (DESKTOP ONLY) */}
          <div className="hidden md:block space-y-2 text-sm font-semibold">
            <p>Terms of Service</p>
            <p>Privacy Statement</p>
            <p>Shipping Policy</p>
            <p>Refund Policy</p>
          </div>

        </div>

        {/* ===== ROW 2 ===== */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-8 mt-8">

          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>

          {/* BOOKING */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FiPhone size={16} />
              <h4 className="font-bold tracking-widest text-sm">RESERVATION</h4>
            </div>
            <p className="text-sm">+91 80080 80444</p>
          </div>

          {/* ENQUIRY */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FiMail size={16} />
              <h4 className="font-bold tracking-widest text-sm">ENQUIRY</h4>
            </div>
            <p className="text-sm">sales@vaulthyd.com</p>
          </div>

          <div className="hidden md:block"></div>

        </div>

        {/* ===== ROW 3 (MOBILE POLICIES) ===== */}
        <div className="grid grid-cols-2 gap-6 mt-8 md:hidden text-sm font-semibold">

          <div className="space-y-2">
            <p>Terms of Service</p>
            <p>Privacy Statement</p>
          </div>

          <div className="space-y-2">
            <p>Shipping Policy</p>
            <p>Refund Policy</p>
          </div>

        </div>

      </div>

      {/* ===== BOTTOM ===== */}
      <div className="relative border-t border-black/20">

        <div className="flex justify-center gap-6 pt-4 pb-2">
          <FiFacebook size={18} className="hover:scale-110 transition cursor-pointer" />
          <FiInstagram size={18} className="hover:scale-110 transition cursor-pointer" />
          <FiYoutube size={18} className="hover:scale-110 transition cursor-pointer" />
        </div>

        <p className="text-center text-xs tracking-widest pb-3">
          © 2026 Vault Brewery Hyderabad. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}
