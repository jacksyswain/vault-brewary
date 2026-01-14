import React from "react";
import heroVideo from "../assets/hero.mp4";
import BookingButton from "../components/BookingButton";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">

      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-[#E6B65C] font-bold tracking-widest">
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