import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import i1 from "../assets/gallery1.png";
import i2 from "../assets/menu1.png";
import i3 from "../assets/gallery2.png";
import i4 from "../assets/gallery4.png";
import i5 from "../assets/event1.jpeg";
import i6 from "../assets/event2.jpeg";
import i7 from "../assets/gallery5.png";
import i8 from "../assets/cock1.png";


const data = [
  {
    title: "Premium Ambience",
    desc: "At Vault Brewery, we’ve created an atmosphere that’s as inviting as our brews. Come take a seat in our beautifully designed space and enjoy a pint with friends. Cheers to good times and great beer!",
    images: [i1, i7],
    side: "left",
  },
  {
    title: "Crafted Cocktails",
    desc: "Signature blends The delicate floral notes of butterfly pea gin are beautifully balanced by the fruity sweetness of blueberries and the zesty tang of cranberry. With fresh mint adding a cooling touch, every sip is a perfect balance of light and refreshing, with just enough boldness to keep things exciting.",
    images: [i2, i8],
    side: "right",
  },
  {
    title: "Live Music",
    desc: "Top DJs and bands lighting up the Vault nights.",
    images: [i6, i5],
    side: "left",
  },
  {
    title: "Elite Crowd",
    desc: "A premium crowd with unmatched nightlife energy.",
    images: [i4, i3],
    side: "right",
  },
];

function ImageSwitcher({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
}

export default function ExperienceStrip() {
  return (
    <section className="py-24 flex flex-col gap-20 overflow-hidden">

      {/* ===== SECTION HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-widest text-[#C78A2D]">
          WHY VAULT BREWERY
        </h2>
        <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
          Discover what makes Vault Hyderabad a premium nightlife destination.
        </p>
      </motion.div>

      {/* ===== STRIPS ===== */}
      {data.map((item, i) => (
        <motion.div
          key={i}
          initial={{
            x: item.side === "left" ? "-100%" : "100%",
            opacity: 0,
          }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`
            relative 
            w-[90vw] h-[30vh] md:w-[80vw] md:h-[40vh]
            ${
              item.side === "left"
                ? "ml-0 mr-auto md:rounded-r-3xl"
                : "mr-0 ml-auto md:rounded-l-3xl"
            }
            flex flex-col md:flex-row
            ${item.side === "right" ? "md:flex-row-reverse" : ""}
            bg-white/90 backdrop-blur border border-black/10 shadow-2xl overflow-hidden rounded-2xl
          `}
        >

          {/* IMAGE */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <ImageSwitcher images={item.images} />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-5 md:p-10">
            <h3 className="text-xl md:text-3xl font-semibold text-[#C78A2D] mb-2 md:mb-4 tracking-wide">
              {item.title}
            </h3>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed max-w-md">
              {item.desc}
            </p>
          </div>

        </motion.div>
      ))}

    </section>
  );
}
