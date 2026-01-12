import React from "react";
import { motion } from "framer-motion";

import c1 from "../assets/event1.jpeg";
import c2 from "../assets/event2.jpeg";
import c3 from "../assets/event3.jpeg";
import heroImg from "../assets/menu.png";

const chinese = [c1, c2, c3];
const continental = [c2, c3, c1];
const indian = [c3, c1, c2];
const beer = [c1, c2, c3];
const beverages = [c2, c3, c1];

const Section = ({ title, direction, images, desc }) => (
  <section className="py-20 bg-black text-white overflow-hidden">
    <h2 className="text-center text-3xl text-gold font-semibold mb-4">
      {title}
    </h2>

    {desc && (
      <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto">
        {desc}
      </p>
    )}

    <motion.div
      className="flex gap-6"
      animate={{
        x: direction === "left" ? ["100%", "-100%"] : ["-100%", "100%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="min-w-[280px] bg-[#111] border border-gold/30 overflow-hidden rounded-xl"
        >
          <img src={img} className="h-48 w-full object-cover" />
        </div>
      ))}
    </motion.div>
  </section>
);

export default function Menu() {
  return (
    <div className="bg-black">

      {/* HERO */}
       <section className="relative h-[50vh] flex items-center justify-center text-center">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-gold">
            OUR MENU
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Curated from Vault Brewery Hyderabad
          </p>
        </div>
      </section>

      {/* CHINESE */}
      <Section
        title="Chinese Cuisine"
        direction="left"
        images={chinese}
        desc="Bold flavors with authentic oriental touch."
      />

      {/* CONTINENTAL */}
      <Section
        title="Continental Delights"
        direction="right"
        images={continental}
        desc="European classics curated for premium dining."
      />

      {/* INDIAN */}
      <Section
        title="Indian Specials"
        direction="left"
        images={indian}
        desc="Traditional spices with modern presentation."
      />

      {/* BEER */}
      <Section
        title="Craft Beers"
        direction="right"
        images={beer}
        desc="Freshly brewed signature beers."
      />

      {/* BEVERAGES */}
      <Section
        title="Beverages & Cocktails"
        direction="left"
        images={beverages}
        desc="Signature cocktails, mocktails and blends."
      />

      {/* CTA */}
      <section className="py-20 text-center bg-[#0b0b0b]">
        <h2 className="text-2xl text-gold font-semibold mb-4">
          Experience the Vault Taste
        </h2>
        <p className="text-gray-400 mb-6">
          Every dish. Every sip. Crafted perfectly.
        </p>
        <a
          href="/booking"
          className="inline-block bg-gold text-black px-8 py-3 tracking-widest hover:opacity-90 transition rounded-full"
        >
          BOOK A TABLE
        </a>
      </section>

    </div>
  );
}
