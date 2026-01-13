import React from "react";
import heroVideo from "../assets/hero.mp4";
import BookingButton from "../components/BookingButton";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />

      {/* VERY LIGHT OVERLAY (optional for readability) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-gold font-bold tracking-widest">
          VAULT BREWERY
        </h1>

        <p className="mt-4 text-gray-200">
          Unlock the Night · Craft Beer · Live Music
        </p>

        <BookingButton />
      </div>

    </section>
  );
}
