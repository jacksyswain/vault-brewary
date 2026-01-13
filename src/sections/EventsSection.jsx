import React from "react";
import { motion } from "framer-motion";
import { eventsData } from "../data/eventsData";
import { Card, CardContent } from "../components/ui/card";

export default function EventsSection() {
  return (
    <section className="py-24 bg-transparent">

      {/* TITLE */}
      <h2 className="section-title text-center mb-12 text-black">
        Upcoming Events
      </h2>

      {/* CENTER WRAPPER */}
      <div className="max-w-7xl mx-auto overflow-hidden">

        {/* SCROLLING STRIP */}
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {eventsData.map((e, i) => (
            <Card
              key={i}
              className="min-w-[280px] bg-white/80 backdrop-blur border border-black/10 shadow-md"
            >
              <CardContent className="flex flex-col items-center text-center">

                <img
                  src={e.img}
                  className="h-40 w-full object-cover rounded mb-3"
                  alt={e.title}
                />

                <h3 className="text-[#b87333] text-lg tracking-wide font-semibold">
                  {e.title}
                </h3>

                <p className="text-gray-700 text-sm">
                  {e.desc}
                </p>

              </CardContent>
            </Card>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
