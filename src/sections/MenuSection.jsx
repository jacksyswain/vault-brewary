import React from "react";
import { motion } from "framer-motion";
import { menuData } from "../data/menuData";
import { Card, CardContent } from "../components/ui/card";

export default function MenuSection() {
  return (
    <section className="py-24 bg-transparent">

      <h2 className="section-title mb-12">Vault Specials</h2>

      <div className="max-w-7xl mx-auto overflow-hidden">

        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 28,
            ease: "linear"
          }}
        >

          {/* FIRST SET */}
          {menuData.map((m, i) => (
            <Card
              key={`first-${i}`}
              className="min-w-[300px] bg-white/85 border border-black/10 backdrop-blur shadow-md"
            >
              <CardContent className="text-center">

                <img
                  src={m.img}
                  className="h-40 w-full object-cover rounded mb-3"
                  alt={m.title}
                />

                <h3 className="text-[#C78A2D] font-semibold tracking-wide">
                  {m.title}
                </h3>

                <p className="text-gray-700 text-sm">{m.desc}</p>

              </CardContent>
            </Card>
          ))}

          {/* DUPLICATE SET */}
          {menuData.map((m, i) => (
            <Card
              key={`second-${i}`}
              className="min-w-[300px] bg-white/85 border border-black/10 backdrop-blur shadow-md"
            >
              <CardContent className="text-center">

                <img
                  src={m.img}
                  className="h-40 w-full object-cover rounded mb-3"
                  alt={m.title}
                />

                <h3 className="text-[#C78A2D] font-semibold tracking-wide">
                  {m.title}
                </h3>

                <p className="text-gray-700 text-sm">{m.desc}</p>

              </CardContent>
            </Card>
          ))}

        </motion.div>

      </div>
    </section>
  );
}
