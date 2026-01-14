import React from "react";
import BookingButton from "../components/BookingButton";

export default function BookingCTA() {
  return (
    <section className="py-32 bg-transparent text-center">

      <h2 className="text-4xl text-[#C78A2D] font-bold mb-4 tracking-wide">
        Reserve Your Night
      </h2>

      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Step inside the Vault. Your table awaits.
      </p>

      <BookingButton />

    </section>
  );
}
