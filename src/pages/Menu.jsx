import React from "react";
import { motion } from "framer-motion";
import PrimaryButton from "../components/BookingButton";

import c1 from "../assets/event1.jpeg";
import c2 from "../assets/event2.jpeg";
import c3 from "../assets/event3.jpeg";
import beer1 from "../assets/menu/beer1.png";
import beer2 from "../assets/menu/beer2.png";
import beer3 from "../assets/menu/beer3.png";
import beer4 from "../assets/menu/beer4.png";
import beer5 from "../assets/menu/beer5.png";
import beer6 from "../assets/menu/beer6.png";
import ch1 from "../assets/menu/ch1.png";
import ch2 from "../assets/menu/ch2.png";
import ch3 from "../assets/menu/ch3.png";
import cnt3 from "../assets/menu/cnt3.png";
import cnt2 from "../assets/menu/cnt2.png";
import cnt1 from "../assets/menu/cnt1.png";
import cok1 from "../assets/menu/cok1.png";
import cok2 from "../assets/menu/cok2.png";
import cok3 from "../assets/menu/cok3.png";
import ind1 from "../assets/menu/ind1.png";

import heroImg from "../assets/menu.png";

const chinese = [ch1, ch2, ch3];
const continental = [cnt2, cnt3, cnt1];
const indian = [ind1, ind1, ind1];
const beer = [beer1, beer2, beer3,beer4,beer5,beer6];
const beverages = [cok2, cok3, cok1];

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
      className="flex gap-6 whitespace-nowrap"
      animate={{
        x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      }}
    >

      {/* FIRST SET */}
      {images.map((img, i) => (
        <div
          key={`first-${i}`}
          className="min-w-[280px] bg-[#111] border border-gold/30 overflow-hidden rounded-xl"
        >
          <img
            src={img}
            className="h-48 w-full object-cover"
            alt={title}
          />
        </div>
      ))}

      {/* DUPLICATE SET */}
      {images.map((img, i) => (
        <div
          key={`second-${i}`}
          className="min-w-[280px] bg-[#111] border border-gold/30 overflow-hidden rounded-xl"
        >
          <img
            src={img}
            className="h-48 w-full object-cover"
            alt={title}
          />
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
          alt="Menu"
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

        <PrimaryButton text="BOOK A TABLE" />

      </section>

    </div>
  );
}
