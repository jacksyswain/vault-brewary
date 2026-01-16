import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import aboutImg from "../assets/event1.jpeg";
import ExperienceStrip from "../sections/ExperienceStrip";

export default function About() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative h-[65vh] flex items-center justify-center text-center">
        <img
          src={aboutImg}
          alt="Vault Brewery"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <img src={logo} className="h-24 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-gold">
            VAULT BREWERY
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Hyderabad’s Premium Craft Brewery & Nightlife Destination
          </p>
        </motion.div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl text-gold font-semibold mb-6"
        >
          Our Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          Located in the heart of Jubilee Hills, Vault Brewery Hyderabad is a
          premium brewery and nightlife destination known for its craft beers,
          signature cocktails, vibrant music, and unforgettable ambience.
          <br /><br />
          From relaxed weekday evenings to energetic weekend nights, Vault
          brings together food lovers, music enthusiasts, and party seekers
          under one roof.
        </motion.p>
      </section>

      {/* EXPERIENCE CARDS */}
      <section className="py-20 bg-[#0b0b0b]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Craft Beers",
              desc: "Freshly brewed craft beers crafted for bold and refined tastes."
            },
            {
              title: "Live Music & DJs",
              desc: "Enjoy live bands, DJ nights and electrifying weekend parties."
            },
            {
              title: "Signature Dining",
              desc: "Continental, Indian, Chinese and premium bar cuisine."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/60 border border-gold/30 p-8 rounded-xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-gold text-xl mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY VAULT SECTION */}
      <section className="py-28 bg-black">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-semibold tracking-widest text-gold mb-6"
        >
          WHY VAULT BREWERY
        </motion.h2>

        <p className="text-center text-gray-400 max-w-xl mx-auto mb-20">
          Discover what makes Vault Hyderabad a premium nightlife destination.
        </p>

        {/* STRIP COMPONENT */}
        <ExperienceStrip />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed max-w-3xl mx-auto mt-20 text-center"
        >
          Vault Brewery is more than just a brewery — it is a celebration of
          lifestyle, music, food and premium experiences. Known for its happy
          hours, weekend crowd, party ambience and warm hospitality, Vault is
          the perfect destination for celebrations, casual hangouts, corporate
          gatherings and unforgettable nights.
        </motion.p>

      </section>

      {/* INFO STRIP */}
      <section className="bg-[#0b0b0b] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h4 className="text-gold mb-2">Location</h4>
            <p className="text-gray-400 text-sm">
              Jubilee Hills, Hyderabad
            </p>
          </div>

          <div>
            <h4 className="text-gold mb-2">Timings</h4>
            <p className="text-gray-400 text-sm">
              Mon–Thu: 12 PM – 11:45 PM <br />
              Fri–Sat: 12 PM – 1 AM <br />
              Sun: 12 PM – 11:45 PM
            </p>
          </div>

          <div>
            <h4 className="text-gold mb-2">Reservations</h4>
            <p className="text-gray-400 text-sm">
              +91 80080 80444
            </p>
          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl text-gold font-semibold mb-4"
        >
          Feel the Sound. Taste the Craft. Live the Night.
        </motion.h2>
        <p className="text-gray-400">
          Welcome to Vault Brewery Hyderabad.
        </p>
      </section>

    </div>
  );
}
