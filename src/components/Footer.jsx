import React from "react";

import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-gold/30 text-center py-10 mt-20">
      <img src={logo} className="h-12 mx-auto mb-4" />
      <p className="text-sm text-gray-400">
        © 2026 Vault Brewery · Hyderabad
      </p>
    </footer>
  );
}
