import React from "react";
import logo from "../assets/logo.png";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <img src={logo} className="h-32 mb-6" />
      <h1 className="text-3xl text-gold">About Page</h1>
    </section>
  );
}
