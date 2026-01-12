import React from "react";
import heroImg from "../assets/event1.jpeg";

export default function Booking() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center text-center">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-gold">
            RESERVE YOUR NIGHT
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Step inside the Vault. Your table awaits.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-[#111] border border-gold/30 p-10 rounded-xl">

          <h2 className="text-2xl text-gold font-semibold text-center mb-10">
            Table Reservation
          </h2>

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="bg-black border border-gold/20 p-3 rounded text-white outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-black border border-gold/20 p-3 rounded text-white outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-black border border-gold/20 p-3 rounded text-white outline-none"
            />

            <input
              type="number"
              placeholder="Number of Guests"
              className="bg-black border border-gold/20 p-3 rounded text-white outline-none"
            />

            <input
              type="date"
              className="bg-black border border-gold/20 p-3 rounded text-white outline-none"
            />

            <input
              type="time"
              className="bg-black border border-gold/20 p-3 rounded text-white outline-none"
            />

            <select className="bg-black border border-gold/20 p-3 rounded text-white outline-none md:col-span-2">
              <option>Preferred Section</option>
              <option>VIP Section</option>
              <option>Family Section</option>
              <option>Smoking Zone</option>
              <option>Open Lounge</option>
            </select>

            <textarea
              rows="4"
              placeholder="Special Requests"
              className="bg-black border border-gold/20 p-3 rounded text-white outline-none md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-gold text-black py-3 tracking-widest rounded-full hover:opacity-90 transition"
            >
              CONFIRM BOOKING
            </button>

          </form>
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
            <h4 className="text-gold mb-2">Contact</h4>
            <p className="text-gray-400 text-sm">
              +91 80080 80444
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
