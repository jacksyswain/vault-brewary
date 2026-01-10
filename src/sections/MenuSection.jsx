import React from "react"
import { motion } from "framer-motion"
import { menuData } from "../data/menuData"
import { Card, CardContent } from "../components/ui/card"

export default function MenuSection() {
  return (
    <section className="py-24 bg-black">
      <h2 className="section-title">Vault Specials</h2>
      <motion.div className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}>
        {menuData.map((m, i) => (
          <Card key={i} className="min-w-[300px]">
            <CardContent>
              <img src={m.img} className="h-40 w-full object-cover rounded mb-3" />
              <h3 className="text-gold">{m.title}</h3>
              <p className="text-gray-400">{m.desc}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </section>
  )
}
