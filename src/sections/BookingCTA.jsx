import React from "react"
import BookingButton from "../components/BookingButton"

export default function BookingCTA() {
  return (
    <section className="py-32 bg-[#0b0b0b] text-center">
      <h2 className="text-4xl text-gold font-bold mb-4">Reserve Your Night</h2>
      <p className="text-gray-400 mb-6">Step inside the Vault. Your table awaits.</p>
      <BookingButton />
    </section>
  )
}
