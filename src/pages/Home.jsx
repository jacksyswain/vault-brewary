import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import heroVideo from "../assets/hero.mp4";
import BookingButton from "../components/BookingButton";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full flex items-center justify-center">

        {/* VIDEO BACKGROUND */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">
          

          <h1 className="text-4xl md:text-6xl font-bold text-gold tracking-widest">
            VAULT BREWERY
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            Unlock the Night · Craft Beer · Live Music
          </p>

          <BookingButton />
        </div>
      </section>

      {/* ================= EVENTS SECTION ================= */}
      <section className="py-24 bg-black">
        <h2 className="text-center text-3xl text-gold font-semibold mb-12">
          Upcoming Events
        </h2>

        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {["DJ Night", "Live Band", "Ladies Night", "EDM Party"].map((event, i) => (
            <div
              key={i}
              className="min-w-[280px] bg-[#111] border border-gold/30 px-6 py-10 text-center"
            >
              <h3 className="text-gold text-xl mb-2">{event}</h3>
              <p className="text-gray-400 text-sm">Every Weekend</p>
            </div>
          ))}
        </motion.div>

        <BookingButton />
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="py-24 bg-[#0b0b0b]">
        <h2 className="text-center text-3xl text-gold font-semibold mb-12">
          Vault Experience
        </h2>

        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {["Premium Ambience", "Luxury Crowd", "Craft Beer", "Nightlife"].map(
            (item, i) => (
              <div
                key={i}
                className="min-w-[260px] bg-black border border-gold/20 px-6 py-8 text-center text-gray-300"
              >
                {item}
              </div>
            )
          )}
        </motion.div>

        <BookingButton />
      </section>

      {/* ================= MENU SECTION ================= */}
      <section className="py-24 bg-black">
        <h2 className="text-center text-3xl text-gold font-semibold mb-12">
          Vault Specials
        </h2>

        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          {["Signature Cocktails", "Craft Beers", "Chef Specials"].map(
            (item, i) => (
              <div
                key={i}
                className="min-w-[300px] bg-[#111] border border-gold/30 px-6 py-10 text-center"
              >
                <h3 className="text-gold text-xl mb-2">{item}</h3>
                <p className="text-gray-400 text-sm">
                  Handcrafted for the elite
                </p>
              </div>
            )
          )}
        </motion.div>

        <BookingButton />
      </section>

      {/* ================= FINAL BOOKING CTA ================= */}
      <section className="py-32 bg-[#0b0b0b] text-center">
        <h2 className="text-4xl text-gold font-bold mb-4">
          Reserve Your Night
        </h2>
        <p className="text-gray-400 mb-8">
          Step inside the Vault. Your table awaits.
        </p>
        <BookingButton />
      </section>
    </div>
  );
}
