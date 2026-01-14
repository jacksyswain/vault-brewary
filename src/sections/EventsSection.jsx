import React from "react";
import { motion } from "framer-motion";
import { eventsData } from "../data/eventsData";
import { Card, CardContent } from "../components/ui/card";

export default function EventsSection() {
  return (
    <section className="py-24 bg-transparent">

      <h2 className="section-title mb-12">Upcoming Events</h2>

      <div className="max-w-7xl mx-auto overflow-hidden">

        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }}
        >

          {/* FIRST SET */}
          {eventsData.map((e, i) => (
            <Card
              key={`first-${i}`}
              className="min-w-[280px] bg-white/85 backdrop-blur border border-black/10 shadow-md"
            >
              <CardContent className="flex flex-col items-center text-center">
                <img
                  src={e.img}
                  className="h-40 w-full object-cover rounded mb-3"
                  alt={e.title}
                />
                <h3 className="text-[#C78A2D] text-lg font-semibold tracking-wide">
                  {e.title}
                </h3>
                <p className="text-gray-700 text-sm">{e.desc}</p>
              </CardContent>
            </Card>
          ))}

          {/* DUPLICATE SET */}
          {eventsData.map((e, i) => (
            <Card
              key={`second-${i}`}
              className="min-w-[280px] bg-white/85 backdrop-blur border border-black/10 shadow-md"
            >
              <CardContent className="flex flex-col items-center text-center">
                <img
                  src={e.img}
                  className="h-40 w-full object-cover rounded mb-3"
                  alt={e.title}
                />
                <h3 className="text-[#C78A2D] text-lg font-semibold tracking-wide">
                  {e.title}
                </h3>
                <p className="text-gray-700 text-sm">{e.desc}</p>
              </CardContent>
            </Card>
          ))}

        </motion.div>

      </div>
    </section>
  );
}
