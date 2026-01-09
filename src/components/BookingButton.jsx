import React from "react"
import { Link } from "react-router-dom";

export default function BookingButton() {
  return (
    <div className="mt-10 flex justify-center">
      <Link
        to="/booking"
        className="
          relative px-8 py-3 font-semibold text-black bg-gold rounded-full
          shadow-[0_0_20px_rgba(212,175,55,0.8)]
          animate-pulse
          hover:shadow-[0_0_35px_rgba(212,175,55,1)]
          transition-all duration-300
        "
      >
        Book a Table
      </Link>
    </div>
  );
}
