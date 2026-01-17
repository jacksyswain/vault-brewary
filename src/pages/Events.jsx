import React from "react";
import hero from "../assets/ehero1.png";
import event1 from "../assets/event1.jpeg";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.jpeg";
import event4 from "../assets/event4.jpeg";

import PrimaryButton from "../components/BookingButton";

export default function Events() {
  const events = [
    {
      title: "DJ Night",
      desc: "High energy DJ nights every weekend with crowd-favorite mixes.",
      img: event1,
      day: "Every Saturday",
    },
    {
      title: "Live Band",
      desc: "Experience live music performances with top local bands.",
      img: event2,
      day: "Every Friday",
    },
    {
      title: "Ladies Night",
      desc: "Special offers, cocktails and exclusive vibes for ladies.",
      img: event3,
      day: "Every Thursday",
    },
    {
      title: "EDM Party",
      desc: "Non-stop EDM beats with laser lights and dance floor madness.",
      img: event4,
      day: "Weekend Special",
    },
  ];

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <img
          src={hero}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-gold">
            EVENTS AT VAULT
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Music, Lights, Drinks & Unforgettable Nights.
          </p>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-gold font-semibold text-center mb-12">
          Weekly Highlights
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {events.map((e, i) => (
            <div
              key={i}
              className="relative bg-[#111] border border-gold/30 overflow-hidden group rounded-xl shadow-lg hover:shadow-gold/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={e.img}
                  className="h-52 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* DAY BADGE */}
                <span className="absolute top-3 right-3 bg-gold text-black text-xs px-3 py-1 rounded-full tracking-wide">
                  {e.day}
                </span>

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">
                <h3 className="text-gold text-xl mb-2 tracking-wide">
                  {e.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
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
              Fri–Sat: 12 PM – 1 AM
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

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-b from-black to-[#0b0b0b]">
        <h2 className="text-2xl text-gold font-semibold mb-4 tracking-wide">
          Reserve Your Table for the Next Event
        </h2>
        <p className="text-gray-400 mb-6">
          Celebrate nights that you will never forget.
        </p>

        <PrimaryButton text="BOOK NOW" />
      </section>

    </div>
  );
}
