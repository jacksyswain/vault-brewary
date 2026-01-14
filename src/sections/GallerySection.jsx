import React from "react";
import { motion } from "framer-motion";
import { galleryData } from "../data/galleryData";
import { Card, CardContent } from "../components/ui/card";

export default function GallerySection() {
  return (
    <section className="py-24 bg-transparent">

      <h2 className="section-title mb-12">Vault Experience</h2>

      <div className="max-w-7xl mx-auto overflow-hidden">

        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear"
          }}
        >

          {/* FIRST SET */}
          {galleryData.map((g, i) => (
            <Card
              key={`first-${i}`}
              className="min-w-[260px] bg-white/85 backdrop-blur border border-black/10 shadow-md"
            >
              <CardContent>
                <img
                  src={g.img}
                  className="h-40 w-full object-cover rounded mb-2"
                  alt={g.title}
                />
                <p className="text-gray-800 font-medium">{g.title}</p>
              </CardContent>
            </Card>
          ))}

          {/* DUPLICATE SET */}
          {galleryData.map((g, i) => (
            <Card
              key={`second-${i}`}
              className="min-w-[260px] bg-white/85 backdrop-blur border border-black/10 shadow-md"
            >
              <CardContent>
                <img
                  src={g.img}
                  className="h-40 w-full object-cover rounded mb-2"
                  alt={g.title}
                />
                <p className="text-gray-800 font-medium">{g.title}</p>
              </CardContent>
            </Card>
          ))}

        </motion.div>

      </div>
    </section>
  );
}
