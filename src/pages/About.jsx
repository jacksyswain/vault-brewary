import React from "react";
import logo from "../assets/logo.png";
import aboutImg from "../assets/event1.jpeg"; // you can change later

export default function About() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src={aboutImg}
          alt="Vault Brewery"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 px-6">
          <img src={logo} className="h-24 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-gold">
            VAULT BREWERY
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Hyderabad’s Premium Craft Brewery & Nightlife Destination
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl text-gold font-semibold mb-6">
          Our Story
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Located in the heart of Jubilee Hills, Vault Brewery Hyderabad is a
          premium brewery and nightlife destination known for its craft beers,
          signature cocktails, vibrant music, and unforgettable ambience.
          <br /><br />
          From relaxed weekday evenings to energetic weekend nights, Vault
          brings together food lovers, music enthusiasts, and party seekers
          under one roof.
        </p>
      </section>

      {/* EXPERIENCE STRIP */}
      <section className="bg-[#0b0b0b] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <div className="border border-gold/30 p-6">
            <h3 className="text-gold text-xl mb-3">Craft Beers</h3>
            <p className="text-gray-400 text-sm">
              Freshly brewed craft beers crafted for bold and refined tastes.
            </p>
          </div>

          <div className="border border-gold/30 p-6">
            <h3 className="text-gold text-xl mb-3">Live Music & DJs</h3>
            <p className="text-gray-400 text-sm">
              Enjoy live bands, DJ nights and electrifying weekend parties.
            </p>
          </div>

          <div className="border border-gold/30 p-6">
            <h3 className="text-gold text-xl mb-3">Signature Dining</h3>
            <p className="text-gray-400 text-sm">
              Continental, Indian, Chinese and premium bar cuisine.
            </p>
          </div>

        </div>
      </section>

      {/* WHY VAULT */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl text-gold font-semibold mb-6">
          Why Vault Brewery?
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Vault Brewery is more than just a brewery — it is a celebration of
          lifestyle, music, food and premium experiences. Known for its happy
          hours, weekend crowd, party ambience and warm hospitality, Vault is
          the perfect destination for celebrations, casual hangouts, corporate
          gatherings and unforgettable nights.
        </p>
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
      <section className="py-20 text-center">
        <h2 className="text-2xl text-gold font-semibold mb-4">
          Feel the Sound. Taste the Craft. Live the Night.
        </h2>
        <p className="text-gray-400">
          Welcome to Vault Brewery Hyderabad.
        </p>
      </section>

    </div>
  );
}
