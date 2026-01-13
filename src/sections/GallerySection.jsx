import React from "react";
import { motion } from "framer-motion";
import { galleryData } from "../data/galleryData";
import { Card, CardContent } from "../components/ui/card";

export default function GallerySection() {
  return (
    <section className="py-24 bg-transparent">

      <h2 className="section-title text-black">
        Vault Experience
      </h2>

      <motion.div
        className="flex gap-6 whitespace-nowrap mt-10"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      >
        {galleryData.map((g, i) => (
          <Card
            key={i}
            className="min-w-[260px] bg-white/80 backdrop-blur border border-black/10 shadow-md"
          >
            <CardContent>
              <img
                src={g.img}
                className="h-40 w-full object-cover rounded mb-2"
              />
              <p className="text-gray-800 font-medium">{g.title}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

    </section>
  );
}
