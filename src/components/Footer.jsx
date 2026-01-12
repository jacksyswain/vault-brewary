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
      }}
    >
      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-8 py-12">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-5 gap-x-10 gap-y-8 items-start">

          {/* LOGO */}
          <div>
            <img src={logo} className="h-16 mb-2" />
          </div>

          {/* QUICK LINKS */}
          <div>
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
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FiMapPin size={16} />
              <h4 className="font-bold tracking-widest text-sm">LOCATION</h4>
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Plot No. 644, Road No. 36,<br />
              Jubilee Hills, Hyderabad
            </p>
          </div>

          {/* TIMINGS */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FiClock size={16} />
              <h4 className="font-bold tracking-widest text-sm">TIMINGS</h4>
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Sun–Thu: 12PM – 11:45PM<br />
              Fri–Sat: 12PM – 1AM
            </p>
          </div>

          {/* POLICIES */}
          <div className="space-y-2 text-sm font-semibold">
            <p>Terms of Service</p>
            <p>Privacy Statement</p>
            <p>Shipping Policy</p>
            <p>Refund Policy</p>
          </div>

        </div>

        {/* SECOND ROW */}
        <div className="grid md:grid-cols-5 gap-x-10 gap-y-8 mt-8">

          <div></div>
          <div></div>

          {/* PHONE */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FiPhone size={16} />
              <h4 className="font-bold tracking-widest text-sm">RSVP / BOOKINGS</h4>
            </div>
            <p className="text-sm font-medium">
              +91 80080 80444
            </p>
          </div>

          {/* EMAIL */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FiMail size={16} />
              <h4 className="font-bold tracking-widest text-sm">FOR ENQUIRIES</h4>
            </div>
            <p className="text-sm font-medium">
              sales@vaulthyd.com
            </p>
          </div>

          <div></div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-black/20">

        {/* SOCIAL ICONS */}
        <div className="max-w-7xl mx-auto px-8 pt-3 pb-2 flex justify-center gap-5">
          <FiFacebook size={18} className="hover:scale-110 transition" />
          <FiInstagram size={18} className="hover:scale-110 transition" />
          <FiYoutube size={18} className="hover:scale-110 transition" />
        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-xs tracking-widest pb-3">
          © 2026 Vault Brewery Hyderabad. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}
